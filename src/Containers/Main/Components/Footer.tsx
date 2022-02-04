import { chakra, HStack, SystemStyleObject, Text } from "@chakra-ui/react";
import { InfoIcon } from "../../../Components/Icons/InfoIcon";

const containerStyles: SystemStyleObject = {
    w: "100%",
    justifyContent: "space-between",
    p: ".6rem 1rem"
}

export const Footer = () => (
    <HStack __css={containerStyles}>
        <Text>
            Available: <chakra.strong>0.3</chakra.strong> <chakra.span color="red">PONG</chakra.span>
        </Text>

        <Text fontWeight="600">
            <InfoIcon /> To play the game, you must own at least 1 game
        </Text>
    </HStack>
)