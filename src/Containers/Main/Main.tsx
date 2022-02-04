import { theme, useStyleConfig, VStack } from "@chakra-ui/react"
import { Body } from "./Components/Body"
import { Footer } from "./Components/Footer"
import { Header } from "./Components/Header"

const containerStyles = {
    w: "100%",
    bg: theme.colors.black,
    mb: ".5rem"
}

export const Main = () => {
    return (
        <VStack __css={containerStyles}>
            <Header />
            <Body />
            <Footer />
        </VStack>
    )
}