import { HStack } from "@chakra-ui/react"
import { CloseButton } from "../../Components/Buttons/CloseButton"
import { PoweredByButton } from "../../Components/Buttons/PoweredByButton";

export const Navigation = () => (
    <HStack justifyContent="space-between" w="100%" pr="2rem">
        <CloseButton aria-label="close" />
        <PoweredByButton aria-label="hashup" />
    </HStack>
);
