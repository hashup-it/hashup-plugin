import React from 'react';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import { useQuery, useLazyQuery, gql } from '@apollo/client';
import { BlockchainWeb3InitialState, BlockchainWeb3Reducer } from './blockchainReducer';
import { chainIdtoName, getAccounts, isMetaMask, isWeb3, loginToMetaMask, networkChainParams } from './web3-utils';
import HashContract from '../../Contracts/Hash/contract';
import HashAddress from '../../Contracts/Hash/address';
import IgoContract from '../../Contracts/GameIgo/igo.json';
import Nicknames from '../../Contracts/Nicknames/nicknames.json';
import GamerProfile from '../../Contracts/GamerProfile/gamerProfile.json';
import { envVariables } from "../../env";
import { useToast } from '@chakra-ui/react'
import { getGame } from '../../Graphql/queries';
import { useGame } from '../GameProvider/GameProvider';

export const BlockchainProvider = ({ children }: any) => {
	const toast = useToast();
	const { game } = useGame();
	const [isCheckOfWeb3, handleIsCheckedWeb3] = useState(false);
	const [isLoadingBuyGame, handleIsLoadingBuyGame] = useState(false);
	const [web3State, web3Dispatch] = useReducer(BlockchainWeb3Reducer, BlockchainWeb3InitialState) as any;

	const dispatch = (action: any) => web3Dispatch(action);

	const hashContract = useMemo(() => new ethers.Contract(HashAddress, HashContract, web3State.signer), [web3State.signer]);
	const igoContract = useMemo(
		() => new ethers.Contract(envVariables.igoAddress, IgoContract, web3State.signer),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[web3State.signer, envVariables.igoAddress],
	);
	const nicknamesContract = useMemo(() => new ethers.Contract(envVariables.nicknameAddress, Nicknames, web3State.signer), [web3State.signer]);
	const gamerProfileContract = useMemo(
		() => new ethers.Contract(envVariables.gamerProfileAddress, GamerProfile, web3State.signer),
		[web3State.signer],
	);

	const addTokenToMetamask = useCallback(async () => {
		const tokenDecimals = 18;
		const tokenImage = 'https://i.ibb.co/QrPpyW3/icon-metamask.png';
		await (window as any).ethereum.request({
			method: 'wallet_watchAsset',
			params: {
				type: 'ERC20',
				options: {
					address: game.id,
					symbol: game.symbol,
					decimals: tokenDecimals, // @TODO: fix
					image: game?.media?.logo,
				},
			},
		});
	}, [game]);

    const buyGame = useCallback(
		async ({ amount, cartridgeAddress }: { amount: string | number; cartridgeAddress: string }) => {
			handleIsLoadingBuyGame(true);
			const tokenPrice = await igoContract.getPrice(cartridgeAddress.toString(), envVariables.hashAddress);
			const buyToken = await igoContract.getBuyTokenForCartridge(cartridgeAddress.toString());

			const erc20 = new ethers.Contract(buyToken, HashContract, web3State.signer);

			if (!tokenPrice || !buyToken) {
				handleIsLoadingBuyGame(false);
				toast({
					title: 'error token price',
					status: 'error',
				});
			} else {
				const totalPrice = (tokenPrice as BigNumber).mul(1).toString();
				const allowToBuy = ((await erc20.allowance(web3State.account, envVariables.igoAddress)) as BigNumber).gte(totalPrice);
				if (allowToBuy) {
					const buyGameTransaction = await igoContract.buyGame(cartridgeAddress, BigNumber.from(amount), BigNumber.from(amount).mul(totalPrice));
					if (!buyGameTransaction) {
						toast({
							title: 'could not buy',
							status: 'error',
						});
						handleIsLoadingBuyGame(false);
					} else {
						const buyGameTransactionFinal = await buyGameTransaction.wait();
						if (buyGameTransactionFinal) {
							toast({
								title: 'buy game success',
								status: 'success',
							});
							handleIsLoadingBuyGame(false);
						} else {
							toast({
								title: 'could not buy',
								status: 'error',
							});
							handleIsLoadingBuyGame(false);
						}
					}
				} else {
					const transactionHashContractApprove = await erc20.approve(envVariables.igoAddress, totalPrice);
					if (transactionHashContractApprove) {
						const transactionFinal = await transactionHashContractApprove.wait();
						if (transactionFinal) {
							toast({
								title: 'buy game success',
								status: 'success',
							});
							handleIsLoadingBuyGame(false);
						}
					} else {
						toast({
							title: 'could not buy',
							status: 'error',
						});
						handleIsLoadingBuyGame(false);
					}
				}
			}
		},
		[web3State.signer],
	);

	const login = useCallback(async () => {
		try {
			// @ts-ignore
			if (web3State?.isWeb3 && !web3State?.isLogged) {
				const accounts = await loginToMetaMask();
				dispatch({ type: 'SET_account', account: accounts[0] });
				dispatch({ type: 'SET_isLogged', isLogged: true });
			}
		} catch (e) {
			dispatch({ type: 'SET_account', account: BlockchainWeb3InitialState.account });
			dispatch({ type: 'SET_isLogged', isLogged: false });
		}
		// @ts-ignore
	}, [web3State.isWeb3, web3State.isLogged]);

	// Check if metamask is installed
	useEffect(() => {
		if (web3State.isWeb3) {
			dispatch({ type: 'SET_isMetaMask', isMetaMask: isMetaMask() });
		}
	}, [web3State.isWeb3]);

	// check if logged in to metamask and get account
	useEffect(() => {
		(async () => {
			const web3S = web3State;
			if (web3S.isWeb3) {
				const accounts = await getAccounts();
				if (accounts.length === 0) {
					dispatch({ type: 'SET_isLogged', isLogged: false });
					dispatch({ type: 'SET_isLoading', loading: false });
					dispatch({
						type: 'SET_account',
						account: BlockchainWeb3InitialState.account,
					});
				} else {
					dispatch({ type: 'SET_account', account: accounts[0] });
					dispatch({ type: 'SET_isLogged', isLogged: true });
					dispatch({ type: 'SET_isLoading', loading: false });
				}
			} else if (isCheckOfWeb3) {
				dispatch({ type: 'SET_isLogged', isLogged: false });
				dispatch({ type: 'SET_isLoading', loading: false });
				handleIsCheckedWeb3(false);
			}
			if (!isCheckOfWeb3) {
				setTimeout(() => {
					handleIsCheckedWeb3(web3S.loading);
				}, 150);
			}
		})();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [web3State.isWeb3, isCheckOfWeb3]);

	// Connect to provider and signer
	useEffect(() => {
		if (web3State.account !== BlockchainWeb3InitialState.account) {
			const provider = new ethers.providers.Web3Provider((window as any).ethereum);
			dispatch({ type: 'SET_provider', provider });
			const signer = provider.getSigner();
			dispatch({ type: 'SET_signer', signer });
		} else {
			dispatch({
				type: 'SET_provider',
				provider: BlockchainWeb3InitialState.provider,
			});
			dispatch({ type: 'SET_signer', signer: BlockchainWeb3InitialState.signer });
		}
	}, [web3State.account, web3State.chainId]);

	// Get ETH amount
	useEffect(() => {
		(async () => {
			if (web3State.provider && web3State.account !== BlockchainWeb3InitialState.account) {
				const walletBalance = await web3State.provider.getBalance(web3State.account);
				const balance = ethers.utils.formatEther(walletBalance);
				dispatch({ type: 'SET_balance', balance });
			} else {
				dispatch({
					type: 'SET_balance',
					balance: BlockchainWeb3InitialState.balance,
				});
			}
		})();
	}, [web3State.provider, web3State.account]);

	// Listen for balance change for webState.account
	useEffect(() => {
		if (web3State.provider) {
			const updateBalance = async () => {
				const balanceEl = await web3State.provider.getBalance(web3State.account);
				const balance = ethers.utils.formatEther(balanceEl);
				if (web3State.account !== BlockchainWeb3InitialState.account) {
					dispatch({ type: 'SET_balance', balance });
				} else {
					dispatch({
						type: 'SET_balance',
						balance: BlockchainWeb3InitialState.balance,
					});
				}
			};
			web3State.provider.on('block', updateBalance);
		}
	}, [web3State.provider, web3State.account]);

	// Listen for networks changes events
	useEffect(() => {
		if (web3State.isWeb3) {
			if (process.env.NODE_ENV !== 'development') {
				(async () => {
					await (window as any).ethereum.request({
						method: 'wallet_addEthereumChain',
						params: [networkChainParams.BSC_MAINNET],
					});
				})();
			}
			const onChainChanged = async (chainId: number) => {
				const chainIdEl = parseInt(Number(chainId).toString(), 10);
				const networkName = chainIdtoName(chainIdEl);
				dispatch({
					type: 'SET_chainId',
					chainId: chainIdEl,
				});
				dispatch({
					type: 'SET_networkName',
					networkName,
				});
			};
			(window as any).ethereum.on('chainChanged', onChainChanged);
		}
	}, [web3State.isWeb3]);

	// Listen for addresses change event
	useEffect(() => {
		if (web3State.isWeb3) {
			const onAccountsChanged = (accounts: any) => {
				if (accounts && accounts.length === 0) {
					(window as any).location = '/';
					setTimeout(() => {
						dispatch({ type: 'clear' });
					}, 300);
				}
				if (accounts.length > 0) {
					dispatch({ type: 'SET_account', account: accounts[0] });
					dispatch({ type: 'SET_isLogged', isLogged: true });
				}
			};
			(window as any).ethereum.on('accountsChanged', onAccountsChanged);
		}
	}, [web3State.isWeb3]);

	useEffect(() => {
		dispatch({ type: 'SET_isWeb3', isWeb3: isWeb3() });
	}, []);

	return (
		<BlockchainContext.Provider
			value={{
				isLogged: web3State.isLogged,
				login,
				isWeb3: web3State.isWeb3,
				addTokenToMetamask,
				buyGame,
				account: web3State.account,
				loading: web3State.loading,
				balance: web3State.balance,
				isLoadingBuyGame,
				hashContract,
				nicknamesContract,
				gamerProfileContract,
			}}
		>
			{children}
		</BlockchainContext.Provider>
	);
};

const BlockchainContext = React.createContext({
	isLogged: false,
	loading: true,
	isWeb3: false,
	account: '',
	isLoadingBuyGame: false,
	balance: 0,
	login: () => {},
	addTokenToMetamask: () => {},
	buyGame: ({ amount, cartridgeAddress }: { amount: string | number; cartridgeAddress: string }) => {},
	hashContract: null as any,
	nicknamesContract: null as any,
	gamerProfileContract: null as any,
});

export const useBlockchainProvider = () => {
	const context = React.useContext(BlockchainContext);
	return context;
};
