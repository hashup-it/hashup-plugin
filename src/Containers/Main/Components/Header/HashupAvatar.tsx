import { Avatar, AvatarBadge, theme } from "@chakra-ui/react";
import { UpIcon } from "../../../../Components/Icons/UpIcon";

export const HashupAvatar = ({ onCollapse }: { onCollapse: () => void }) => (
    <Avatar size="sm">
        <AvatarBadge boxSize=".9rem" bg='white' cursor="pointer" onClick={onCollapse}>
            <UpIcon p="0 .2rem 0 .25rem" color={theme.colors.black} />
        </AvatarBadge>
    </Avatar>
);