import { useEffect, useState } from 'react';
import { useBlockchainProvider } from '../Providers/Blockchain/BlockchainProvider';

export const useReflink = () => {
	const { account } = useBlockchainProvider();
	const [reflink, setReflink] = useState<string | null>(null);

	useEffect(() => {
		setReflink(localStorage.getItem('buddy') ?? (account as string));
	}, [account]);

	const copy = () => {
		const reflink = `${window.location.protocol}//${window.location.host}?buddy=${account}`;
		navigator.clipboard.writeText(reflink);
	};

	return {
		copyReflink: copy,
		getReflink: reflink,
	};
};