import { Card } from "../../../../Components/Panels/Card"
import { Text } from '@chakra-ui/react';
import { HashupAvatar } from "./HashupAvatar";

export const AccountCard = ({ onCollapse }: { onCollapse: () => void }) => (
    <Card rightIcon={<HashupAvatar onCollapse={onCollapse} />}>
        <Text variant="primary">JuliaDlugiTekst</Text>
        <Text>0x1552...532d</Text>
    </Card>
);