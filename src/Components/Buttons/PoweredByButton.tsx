import { Button, ButtonProps, forwardRef, SystemStyleObject, useStyleConfig } from "@chakra-ui/react";
import { HashupIcon } from "../Icons/HashupIcon";

export const PoweredByButton = forwardRef<ButtonProps, "button">(({ variant, size, ...rest }, ref) => {
    const styles = useStyleConfig('Button', { variant, size: 'sm'  })
    const cssStyles: SystemStyleObject = {
        ...styles,
        borderRadius: "0 0 .75rem .75rem",
        fontSize: "0.825rem",
        backgroundColor: "#0A0A08",
        opacity: "0.2",
    }

    return <Button ref={ref} __css={cssStyles} rightIcon={<><HashupIcon /> HashUp</>} {...rest}>Powered by</Button>
});
