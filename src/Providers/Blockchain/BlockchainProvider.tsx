import React from 'react';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { BigNumber, ethers } from 'ethers';
import { BlockchainWeb3InitialState, BlockchainWeb3Reducer } from './blockchainReducer';
import { chainIdtoName, getAccounts, isMetaMask, isWeb3, loginToMetaMask, networkChainParams } from './web3-utils';
import Erc20Contract from '../../Contracts/Hash/contract';
import HashAddress from '../../Contracts/Hash/address';
import IgoContract from '../../Contracts/GameIgo/igo.json';
import Nicknames from '../../Contracts/Nicknames/nicknames.json';
import GamerProfile from '../../Contracts/GamerProfile/gamerProfile.json';
import { envVariables } from "../../env";
import { useToast } from '@chakra-ui/react'
import { useGame } from '../GameProvider/GameProvider';
import { useLocalStorage } from '../../Hooks/useLocalStorage';

// @TODO quick solution, to fix: https://stackoverflow.com/questions/5448545/how-to-retrieve-get-parameters-from-javascript 
const findGetParameter = (parameterName: string) => {
    var result = null,
        tmp = [];
    window.location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
        });
    return result;
}

export const BlockchainProvider = ({ children }: any) => {
	const [_buddy, setBuddy, clearBuddy] = useLocalStorage('buddy');

	React.useEffect(() => {
		const buddyParam = findGetParameter('buddy');
		buddyParam ? setBuddy(buddyParam) : clearBuddy();
	}, [])

	const toast = useToast();
	const { game, cartridgeAddress } = useGame();
	const [isCheckOfWeb3, handleIsCheckedWeb3] = useState(false);
	const [isLoadingBuyGame, handleIsLoadingBuyGame] = useState(false);
	const [web3State, web3Dispatch] = useReducer(BlockchainWeb3Reducer, BlockchainWeb3InitialState) as any;

	const dispatch = (action: any) => web3Dispatch(action);

	const hashContract = useMemo(() => new ethers.Contract(HashAddress, Erc20Contract, web3State.signer), [web3State.signer]);
	const gameContract = useMemo(() => new ethers.Contract(cartridgeAddress, Erc20Contract, web3State.signer), [web3State.signer, cartridgeAddress]);

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
		// const tokenImage = 'https://i.ibb.co/QrPpyW3/icon-metamask.png';
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

	// TODO: refetch after buy on callback
    const buyGame = useCallback(
		async ({ amount, cartridgeAddress, callback }: { amount: string | number; cartridgeAddress: string; callback: () => void }) => {
			handleIsLoadingBuyGame(true);

			const buyToken = await igoContract.getBuyTokenForCartridge(cartridgeAddress)
			const tokenPrice = await igoContract.getPrice(cartridgeAddress.toString(), buyToken);

			const buyTokenContract = new ethers.Contract(buyToken, Erc20Contract, web3State.signer); // TODO: not always HashContract

			if (!tokenPrice || !buyToken) {
				handleIsLoadingBuyGame(false);
				toast({
					title: 'error token price',
					status: 'error',
				});
			} else {
				const totalPrice = (tokenPrice as BigNumber).mul(1).toString();
				// console.warn(cartridgeAddress, buyToken, web3State.account, envVariables.igoAddress);
				const allowToBuy = ((await buyTokenContract.allowance(web3State.account, envVariables.igoAddress)) as BigNumber).gte(totalPrice);
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
							callback();
						} else {
							toast({
								title: 'could not buy',
								status: 'error',
							});
							handleIsLoadingBuyGame(false);
						}
					}
				} else {
					const transactionHashContractApprove = await buyTokenContract.approve(envVariables.igoAddress, totalPrice);
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


	const updateGameBalance = async () => {
		if (web3State.provider && web3State.account !== BlockchainWeb3InitialState.account) {
			const walletBalance = await gameContract.balanceOf(web3State.account);
			const gameBalance = ethers.utils.formatEther(walletBalance);
			dispatch({ type: 'SET_gameBalance', gameBalance });
		} else {
			dispatch({
				type: 'SET_gameBalance',
				gameBalance: BlockchainWeb3InitialState.gameBalance,
			});
		}
	}

	const updateHashBalance = async () => {
		if (web3State.provider && web3State.account !== BlockchainWeb3InitialState.account) {
			const walletBalance = await hashContract.balanceOf(web3State.account);
			const hashBalance = ethers.utils.formatEther(walletBalance);
			dispatch({ type: 'SET_hashBalance', hashBalance });
		} else {
			dispatch({
				type: 'SET_hashBalance',
				hashBalance: BlockchainWeb3InitialState.hashBalance,
			});
		}
	}

	useEffect(() => {
		updateHashBalance();
		updateGameBalance();
	}, [web3State.provider, web3State.account]);

	useEffect(() => {
		if (web3State.provider) {
			web3State.provider.on('block', updateHashBalance);
			web3State.provider.on('block', updateGameBalance);
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
				hashBalance: web3State.hashBalance,
				gameBalance: web3State.gameBalance,
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
	isLogged: null,
	loading: true,
	isWeb3: false,
	account: '',
	isLoadingBuyGame: false,
	hashBalance: 0,
	gameBalance: 0,
	login: () => {},
	addTokenToMetamask: () => {},
	// @ts-ignore
	buyGame: ({ amount, cartridgeAddress, callback }: { amount: string | number; cartridgeAddress: string; callback: () => void }) => {},
	hashContract: null as any,
	nicknamesContract: null as any,
	gamerProfileContract: null as any,
});

export const useBlockchainProvider = () => {
	const context = React.useContext(BlockchainContext);
	return context;
};
