import { chakra, HStack, SystemStyleObject, Text, theme } from "@chakra-ui/react";
import { InfoIcon } from "../../../Components/Icons/InfoIcon";
import { useBlockchainProvider } from "../../../Providers/Blockchain/BlockchainProvider";
import { useGame } from "../../../Providers/GameProvider/GameProvider";

const containerStyles: SystemStyleObject = {
    justifyContent: "space-between",
    p: ".6rem 1rem",
    bg: theme.colors.black,
    mx: "1.25rem",
    mb: "1.25rem !important",
    w: "calc(100% - 2.5rem)",
    color: theme.colors.white,
}

export const Footer = () => {
    const { gameBalance } = useBlockchainProvider();
    const { game } = useGame();
    return (
        <HStack __css={containerStyles}>
            <Text>
                Available: <chakra.strong>{gameBalance}</chakra.strong> <chakra.span color="red">{game?.symbol}</chakra.span>
            </Text>

            <Text fontWeight="600">
                <InfoIcon /> &nbsp;To play the game, you must own at least 1 game
            </Text>
        </HStack>
    )
}