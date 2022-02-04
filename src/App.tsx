import './App.css';
import { Button, ButtonGroup, ChakraProvider, ColorModeProvider, IconButton, Image, theme, ThemeProvider, VStack } from '@chakra-ui/react';
import { chakraTheme } from './Theme/chakraTheme';
import { Main } from './Containers/Main/Main';
import { AdditionalPanel } from './Containers/AdditionalPanel/AdditionalPanel';
import { CloseButton } from './Components/Buttons/CloseButton';
import { Navigation } from './Containers/Navigation/Navigation';
import { Fonts } from './Theme/Fonts';

function App() {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Fonts />
      <VStack spacing="0" w="400px">
        <Main />
        <AdditionalPanel />
        <Navigation />
      </VStack>
      {/* <Image src="/static/logo.svg" alt="logo" /> */}
    </ChakraProvider>
  );
}

export default App;
