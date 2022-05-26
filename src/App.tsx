import { Main } from './Containers/Main/Main'
import { useBlockchainProvider } from './Providers/Blockchain/BlockchainProvider'
import { Box, Heading, theme, VStack } from '@chakra-ui/react'
import { AdditionalPanel } from './Containers/Main/Components/AdditionalPanel'
import { Body } from './Containers/Main/Components/Body'
import { Footer } from './Containers/Main/Components/Footer'
import { PLUGIN_MODE } from './Enums/pluginMode.enum'

const options = {
    [PLUGIN_MODE.DEVELOPMENT]: ({ gameBalance }: any) => (
        <>
            <VStack position="fixed" zIndex="3" top="0" right="0" spacing="0" w="476px" fontSize="0.625rem"
                    color={theme.colors.gray[400]}>
                <Main />
            </VStack>
            {+gameBalance < 1 && (
                <Box position="fixed" zIndex="2" bg="rgba(0,0,0,0.9)" top="0" left="0" right="0" bottom="0"
                     textAlign="left">
                    <Heading position="absolute" bottom="1rem" left="1rem">Not allowed,<br />buy at least one
                        game</Heading>
                </Box>
            )}
        </>
    ),
    [PLUGIN_MODE.WEBSITE]: ({ gameBalance }: any) => (
        <>
            <VStack position="fixed" zIndex="3" top="0" right="0" spacing="0" w="476px" fontSize="0.625rem"
                    color={theme.colors.gray[400]}>
                <Main />
            </VStack>
            {+gameBalance < 1 && (
                <Box position="fixed" zIndex="2" bg="rgba(0,0,0,0.9)" top="0" left="0" right="0" bottom="0"
                     textAlign="left">
                    <Heading position="absolute" bottom="1rem" left="1rem">Not allowed,<br />buy at least one
                        game</Heading>
                </Box>
            )}
        </>
    ),
    [PLUGIN_MODE.GAMEXPLORER]: () => (
        <VStack w="476px" fontSize="0.625rem" color={theme.colors.gray[400]}>
            <VStack spacing="0" mb=".5rem" bg="#21242B" borderRadius=".25rem">
                <Heading size="lg" alignSelf="flex-start" ml="1.5rem" mt="1rem">Buy this game</Heading>
                <Body />
                <Footer />
            </VStack>

            <AdditionalPanel />
        </VStack>
    )
}

const App = ({ mode }: { mode: PLUGIN_MODE }) => {
    const { gameBalance } = useBlockchainProvider()
    return options[mode]({ gameBalance })
}

export default App
