import Icon from "@chakra-ui/icon";
import { BoxProps, forwardRef, HStack, IconProps, VStack } from "@chakra-ui/react";
import { ReactNode } from "react";

export enum CARD_SIZE {}

export const Card = forwardRef<BoxProps & { size?: CARD_SIZE, leftIcon?: ReactNode, rightIcon?: ReactNode }, "div">(({ children, leftIcon, rightIcon, ...rest }, ref) => {
    return (
        <HStack ref={ref} {...rest}>
            {leftIcon}
            <VStack spacing="0" alignItems="flex-start" justifyContent="center">
                {children}
            </VStack>
            {rightIcon}
        </HStack>
    )
});