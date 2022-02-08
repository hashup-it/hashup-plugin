import { chakra, HStack, SystemStyleObject, Text, theme } from "@chakra-ui/react";
import { InfoIcon } from "../../../Components/Icons/InfoIcon";
import { useGame } from "../../../Providers/GameProvider/GameProvider";

const containerStyles: SystemStyleObject = {
    w: "100%",
    justifyContent: "space-between",
    p: ".6rem 1rem",
    bg: theme.colors.black,
}

export const Footer = () => {
    const { game } = useGame();
    return (
        <HStack __css={containerStyles}>
            <Text>
                Available: <chakra.strong>0</chakra.strong> <chakra.span color="red">{game.symbol}</chakra.span>
            </Text>

            <Text fontWeight="600">
                <InfoIcon /> To play the game, you must own at least 1 game
            </Text>
        </HStack>
    )
}