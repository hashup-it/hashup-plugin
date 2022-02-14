import { Avatar, AvatarBadge, theme } from "@chakra-ui/react";
import { UpIcon } from "../../../../Components/Icons/UpIcon";

export const HashupAvatar = ({ onCollapse }: { onCollapse: () => void }) => (
    <Avatar size="xs">
        <AvatarBadge boxSize=".7rem" bg='white' cursor="pointer" onClick={onCollapse}>
            <UpIcon p="0 .15rem 0 .15rem" color={theme.colors.black} />
        </AvatarBadge>
    </Avatar>
);