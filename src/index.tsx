import App from './App';
import { customTheme } from './Theme/customTheme';
// import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react';

import { Fonts } from './Theme/Fonts';
import { BlockchainProvider } from './Providers/Blockchain/BlockchainProvider';
import { PLUGIN_MODE } from './Enums/pluginMode.enum';
import { envVariables } from './env';
import { GameProvider } from './Providers/GameProvider/GameProvider';
import { MoralisProvider } from 'react-moralis';
import ReactDOM from 'react-dom';
import React from 'react';
// import { MoralisProvider } from 'react-moralis';
// import ReactDOM = require('react-dom');
// import React = require('react');

// const client = new ApolloClient({
// 	uri: 'https://api.hashup.it/graphql',
// 	cache: new InMemoryCache(),
// 	headers: {
// 		'x-api-key': 'da2-umx34azugvgcpph7bqpuximlbm',
// 	},
// });

export interface PluginProps {
    cartridgeAddress: string;
    mode?: PLUGIN_MODE;
}

export const SimpleHashupPlugin = ({ cartridgeAddress, mode = PLUGIN_MODE.GAMEXPLORER }: PluginProps) => (
    <GameProvider cartridgeAddress={cartridgeAddress}>
        <BlockchainProvider>
            <Fonts />
            <App mode={mode} />
        </BlockchainProvider>
    </GameProvider>
);

const HashupPlugin = ({ cartridgeAddress, mode = PLUGIN_MODE.WEBSITE }: PluginProps) => (
    <ChakraProvider theme={customTheme}>
        <SimpleHashupPlugin cartridgeAddress={cartridgeAddress} mode={mode} />
    </ChakraProvider>
);

export const RootDomCartridge = () => {
    const rootEl = document.getElementById('root');
    const cartridgeAddress = rootEl?.getAttribute('data-cartridge') || envVariables.cartridgeAddress;

    return <HashupPlugin cartridgeAddress={cartridgeAddress} mode={envVariables.pluginMode as PLUGIN_MODE} />;
};

ReactDOM.render(
    <React.StrictMode>
        <MoralisProvider
            serverUrl="https://mqia9hg0fj9k.usemoralis.com:2053/server"
            appId="yXCZJLM8gX3PgM8xc2TnxHoQfg86qukH8NRgjKPv"
        >
            <RootDomCartridge />
        </MoralisProvider>
    </React.StrictMode>,
    document.getElementById('root'),
)

// ReactDOM.render(
//   <React.StrictMode>
//     <RootDomCartridge />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

export default HashupPlugin;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
