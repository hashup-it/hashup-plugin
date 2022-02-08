import { forwardRef, IconButton, IconButtonProps, SystemStyleObject, useStyleConfig } from "@chakra-ui/react";
import { DownIcon } from "../Icons/DownIcon";
import { UpIcon } from "../Icons/UpIcon";

export enum EXPANSION_BTN_MODE {
    EXPAND = 'EXPAND',
    COLLAPSE = 'COLLAPSE',
}

export const expandIconOptions = {
    [EXPANSION_BTN_MODE.EXPAND]: <DownIcon />,
    [EXPANSION_BTN_MODE.COLLAPSE]: <UpIcon />,
}

export const ExpansionButton = forwardRef<IconButtonProps & { mode: EXPANSION_BTN_MODE }, "div">(({ variant, size, mode, ...rest }, ref) => {
    const styles = useStyleConfig('Button', { variant, size: 'sm'  })
    const cssStyles: SystemStyleObject = {
        ...styles,
        px: "1.5rem !important",
        borderRadius: "0 0 4px 4px",
    }

    return <IconButton ref={ref} __css={cssStyles} {...rest} icon={expandIconOptions[mode]} />
});
