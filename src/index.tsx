import App from './App'
import { customTheme } from './Theme/customTheme'
import reportWebVitals from './reportWebVitals'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import ReactDOM from 'react-dom'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { Fonts } from './Theme/Fonts'
import { BlockchainProvider } from './Providers/Blockchain/BlockchainProvider'
import { GameProvider } from './Providers/GameProvider/GameProvider'
import { PLUGIN_MODE } from './Enums/pluginMode.enum'
import { envVariables } from './env'

const client = new ApolloClient({
    uri: ' https://api.hashup.it/graphql',
    cache: new InMemoryCache(),
    headers: {
        'x-api-key': 'da2-umx34azugvgcpph7bqpuximlbm'
    }
})

export interface PluginProps {
    cartridgeAddress: string,
    mode?: PLUGIN_MODE
}

export const SimpleHashupPlugin = ({ cartridgeAddress, mode = PLUGIN_MODE.GAMEXPLORER }: PluginProps) => (
    <ApolloProvider client={client}>
        <GameProvider cartridgeAddress={cartridgeAddress}>
            <BlockchainProvider>
                <Fonts />
                <App mode={mode} />
            </BlockchainProvider>
        </GameProvider>
    </ApolloProvider>
)

const HashupPlugin = ({ cartridgeAddress, mode = PLUGIN_MODE.WEBSITE }: PluginProps) => (
    <ChakraProvider theme={customTheme}>
        <SimpleHashupPlugin cartridgeAddress={cartridgeAddress} mode={mode} />
    </ChakraProvider>
)

const RootDomCartridge = () => {
    const rootEl = document.getElementById('root')
    const cartridgeAddress = rootEl?.getAttribute('data-cartridge') || envVariables.cartridgeAddress

    return <HashupPlugin cartridgeAddress={'0xa2FD2D85ED9fd0Dd479e9090215842c4EBf1dcE8'}
                         mode={envVariables.pluginMode as PLUGIN_MODE} />
}

ReactDOM.render(
    <React.StrictMode>
        <RootDomCartridge />
    </React.StrictMode>,
    document.getElementById('root')
)

export default HashupPlugin

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
