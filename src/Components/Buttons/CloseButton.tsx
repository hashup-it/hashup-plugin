import { forwardRef, IconButton, IconButtonProps, SystemStyleObject, useStyleConfig } from "@chakra-ui/react";
import { CloseIcon } from "../Icons/CloseIcon";

export const CloseButton = forwardRef<IconButtonProps, "div">(({ variant, size, ...rest }, ref) => {
    const styles = useStyleConfig('Button', { variant, size: 'sm'  })
    const cssStyles: SystemStyleObject = {
        ...styles,
        px: "1.5rem !important",
        borderRadius: "0 0 4px 4px",
    }

    return <IconButton ref={ref} __css={cssStyles} {...rest} icon={<CloseIcon />} />
});
