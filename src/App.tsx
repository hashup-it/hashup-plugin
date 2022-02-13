import { ChakraProvider, VStack } from '@chakra-ui/react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { chakraTheme } from './Theme/chakraTheme';
import { Main } from './Containers/Main/Main';
import { Fonts } from './Theme/Fonts';
import { BlockchainProvider } from './Providers/Blockchain/BlockchainProvider';
import { GameProvider } from './Providers/GameProvider/GameProvider';

const client = new ApolloClient({
	uri: ' https://api.hashup.it/graphql',
	cache: new InMemoryCache(),
	headers: {
		'x-api-key': 'da2-umx34azugvgcpph7bqpuximlbm',
	},
});

function App({ cartridgeAddress }: { cartridgeAddress: string }) {
  return (
    <ApolloProvider client={client}>
      <GameProvider cartridgeAddress={cartridgeAddress}>
        <BlockchainProvider>
            <ChakraProvider theme={chakraTheme}>
              <Fonts />
              <VStack spacing="0" w="400px">
                <Main />
              </VStack>
            </ChakraProvider>
        </BlockchainProvider>
      </GameProvider>
    </ApolloProvider>
  );
}

export default App;
