import './App.css';
import { ChakraProvider, VStack } from '@chakra-ui/react';
import { chakraTheme } from './Theme/chakraTheme';
import { Main } from './Containers/Main/Main';
import { Fonts } from './Theme/Fonts';
import { BlockchainProvider } from './Providers/Blockchain/BlockchainProvider';

function App() {
  return (
    <BlockchainProvider>
      <ChakraProvider theme={chakraTheme}>
        <Fonts />
        <VStack spacing="0" w="400px">
          <Main />
        </VStack>
      </ChakraProvider>
    </BlockchainProvider>
  );
}

export default App;
