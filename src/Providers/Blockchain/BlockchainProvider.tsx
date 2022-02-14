import React from 'react';
import { useCallback, useEffect, useMemo, useReducer, useState } from 'react';
import { ethers } from 'ethers';
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
import { BigNumber } from "bignumber.js";

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

const decimals = 1000000000000000000;
const gameDecimals = 100;
const buyToken = envVariables.hashAddress;

export const BlockchainProvider = ({ children }: any) => {
	const [buddy, setBuddy, clearBuddy] = useLocalStorage('buddy');

	React.useEffect(() => {
		const buddyParam = findGetParameter('buddy');
		console.warn(buddyParam)
		buddyParam ? setBuddy(buddyParam) : clearBuddy();
	}, []);

	const toast = useToast();
	const { game, cartridgeAddress } = useGame();
	const [quantity, setQuantity] = useState('');
	const [isCheckOfWeb3, handleIsCheckedWeb3] = useState(false);
	const [allowance, setAllowance] = useState<BigNumber>(new BigNumber(0));
	const [isLoadingBuyGame, handleIsLoadingBuyGame] = useState(false);
	const [web3State, web3Dispatch] = useReducer(BlockchainWeb3Reducer, BlockchainWeb3InitialState) as any;

	const dispatch = (action: any) => web3Dispatch(action);

	/** CONTRACTS  */
	const hashContract = useMemo(() => new ethers.Contract(HashAddress, Erc20Contract, web3State.signer), [web3State.signer]);
	const gameContract = useMemo(() => new ethers.Contract(cartridgeAddress, Erc20Contract, web3State.signer), [web3State.signer, cartridgeAddress]);
	const igoContract = useMemo(() => new ethers.Contract(envVariables.igoAddress, IgoContract, web3State.signer), [web3State.signer],);
	const nicknamesContract = useMemo(() => new ethers.Contract(envVariables.nicknameAddress, Nicknames, web3State.signer), [web3State.signer]);
	const gamerProfileContract = useMemo(() => new ethers.Contract(envVariables.gamerProfileAddress, GamerProfile, web3State.signer), [web3State.signer]);
	const buyTokenContract = useMemo(() => new ethers.Contract(buyToken, Erc20Contract, web3State.signer), [web3State.signer, buyToken]);
	/** END CONTRACTS */

	const etherQuantity = useMemo(() => new BigNumber(quantity).multipliedBy(gameDecimals), [quantity]);
	const etherTokenPrice = useMemo(() => new BigNumber(game?.cartridge?.unitPrice || 0).multipliedBy(decimals), [game]); // TODO: Fix
	const etherTotalPrice = useMemo(() =>  etherTokenPrice.multipliedBy(quantity), [etherTokenPrice, quantity]); // logic of contract...
	const isBuyAllowed = useMemo(() => etherTotalPrice.isLessThanOrEqualTo(allowance), [allowance, etherTotalPrice]);

	const updateAllowance = async () => {
		try {
			const allowance = await buyTokenContract.allowance(web3State.account, envVariables.igoAddress);
			setAllowance(new BigNumber(allowance.toString()));
		} catch(e) { }
	}

	useEffect(() => {
		updateAllowance();
	}, [web3State.account, buyTokenContract]);

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
					decimals: 2,
					image: game?.media?.logo,
				},
			},
		});
	}, [game]);

	const approveGame = async () => {
		handleIsLoadingBuyGame(true);
		console.warn('approve game')
		try {
			// console.warn(etherTotalPrice.toString());
			const transactionHashContractApprove = await buyTokenContract.approve(envVariables.igoAddress, etherTotalPrice.toString());
			await transactionHashContractApprove.wait();
			await updateAllowance();
			handleIsLoadingBuyGame(false);
			toast({
				title: 'approve game success',
				status: 'success',
			});
		} catch(e) {
			console.error(e);
			handleIsLoadingBuyGame(false);
			toast({
				title: 'could not approve',
				status: 'error',
			});
		}
	}

	const buyGameTx = async () => {
		console.warn(buddy);
		if (buddy) {
			return await igoContract.buyGameWithReflink(cartridgeAddress, etherQuantity.toString(), etherTotalPrice.toString(), buddy);
		} else {
			return await igoContract.buyGame(cartridgeAddress, etherQuantity.toString(), etherTotalPrice.toString());
		}
	}

	const buyGame = async () => {
		handleIsLoadingBuyGame(true);
		if (etherTotalPrice.isGreaterThan(allowance)) {
			return 'not allowed';
		}
		console.warn('buy game')

		try {
			const buyGameTransaction = await buyGameTx();
			await buyGameTransaction.wait();
			toast({
				title: 'buy game success',
				status: 'success',
			});
			handleIsLoadingBuyGame(false);
		} catch(e) {
			console.error(e);
			toast({
				title: 'could not buy',
				status: 'error',
			});
			handleIsLoadingBuyGame(false);
		}
		return;
	}

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
		try {
			if (web3State.provider && web3State.account !== BlockchainWeb3InitialState.account) {
				const walletBalance = await gameContract.balanceOf(web3State.account);
				const balance = new BigNumber(walletBalance.toString()).div(gameDecimals);
				dispatch({ type: 'SET_gameBalance', gameBalance: balance.toString() });
			} else {
				dispatch({
					type: 'SET_gameBalance',
					gameBalance: BlockchainWeb3InitialState.gameBalance,
				});
			}
		} catch(e) { }
	}

	const updateHashBalance = async () => {
		try {
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
		} catch(e) { }
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
			// TODO: only dev
			// (async () => {
			// 	await (window as any).ethereum.request({
			// 		method: 'wallet_addEthereumChain',
			// 		params: [networkChainParams.BSC_MAINNET],
			// 	});
			// })();
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
				approveGame,
				quantity,
				updateQuantity: setQuantity,
				isBuyAllowed,
				allowance,
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
	allowance: new BigNumber(0),
	quantity: '',
	isBuyAllowed: false,
	updateQuantity: (value: string) => {},
	login: () => {},
	addTokenToMetamask: () => {},
	// @ts-ignore
	buyGame: () => {},
	approveGame: () => {},
	hashContract: null as any,
	nicknamesContract: null as any,
	gamerProfileContract: null as any,
});

export const useBlockchainProvider = () => {
	const context = React.useContext(BlockchainContext);
	return context;
};
