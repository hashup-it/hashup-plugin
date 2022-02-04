import { Avatar, AvatarBadge, HStack, SystemStyleObject, Text, useStyleConfig } from "@chakra-ui/react";
import { HashupIcon } from "../../../Components/Icons/HashupIcon";
import { Card } from "../../../Components/Panels/Card";

const containerStyles: SystemStyleObject = {
    justifyContent: "space-between",
    w: "100%",
    p: ".5rem 1rem"
}

export const Header = () =>  (
    <HStack __css={containerStyles}>
        <Card leftIcon={<HashupIcon boxSize={8} />}>
            <Text>Your hash</Text>
            <Text variant="primary">54,155.2521</Text>
        </Card>

        <Card rightIcon={<Avatar size="sm"><AvatarBadge boxSize=".75rem" bg='green.500' /></Avatar>}>
            <Text variant="primary">JuliaDlugiTekst</Text>
            <Text>0x1552...532d</Text>
        </Card>
    </HStack>
)