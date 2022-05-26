import { Card } from '../../../../Components/Panels/Card';
import { Flex, Text } from '@chakra-ui/react';
import { useBlockchainProvider } from '../../../../Providers/Blockchain/BlockchainProvider';
import { safeParseBalance } from '../../../../Utils/parser';

export const HashupCard = () => {
	const { hashBalance } = useBlockchainProvider();
	return (
		<Card>
			<Text>Your balance</Text>
			<Flex gridGap="4px"><Text
				variant="primary">{safeParseBalance(hashBalance.toString())}</Text><Text variant="primary"
			                                                                             fontSize="smaller"
			                                                                             lineHeight="20px">USDC</Text></Flex>
		</Card>
	);
};
