// createIcon fn

import Icon from "@chakra-ui/icon";
import { forwardRef, IconProps } from "@chakra-ui/react";

export const CloseIcon = forwardRef<IconProps, "svg">((props, ref) => (
    <Icon ref={ref} viewBox="0 0 12 7" fill="transparent" {...props}>
        <path d="M11 6L6 1L1 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </Icon>
));
