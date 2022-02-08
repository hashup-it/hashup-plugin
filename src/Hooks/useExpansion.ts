import { useEffect } from "react";
import { useBlockchainProvider } from "../Providers/Blockchain/BlockchainProvider";
import { EXPANSION_MODE } from "./expansionMode.enum";
import { useLocalStorage } from "./useLocalStorage";

export const localStorageExpansionKey = 'EXPANSION_MODE';

export interface ExpansionProps  {
	expansionMode: EXPANSION_MODE,
	onDisconnected: () => void,
	onExpand: () => void,
	onPartialExpand: () => void,
	onCollapse: () => void,
}

export const useExpansion = () => {
	const { isLogged } = useBlockchainProvider();
	const [expansionMode, setExpansionMode] = useLocalStorage(localStorageExpansionKey, isLogged ? EXPANSION_MODE.DISCONNECTED : EXPANSION_MODE.DISCONNECTED);

	useEffect(() => {
		if (expansionMode === EXPANSION_MODE.DISCONNECTED && isLogged) {
			setExpansionMode(EXPANSION_MODE.EXPAND)
		} else if (!isLogged && expansionMode !== EXPANSION_MODE.DISCONNECTED) {
			setExpansionMode(EXPANSION_MODE.DISCONNECTED);
		}
	}, [isLogged]);

	return {
	  expansionMode,
	  onDisconnected: () => setExpansionMode(EXPANSION_MODE.DISCONNECTED),
	  onExpand: () => setExpansionMode(EXPANSION_MODE.EXPAND),
	  onPartialExpand: () => setExpansionMode(EXPANSION_MODE.PARTIAL_EXPAND),
	  onCollapse: () => setExpansionMode(EXPANSION_MODE.COLLAPSE),
	};
}