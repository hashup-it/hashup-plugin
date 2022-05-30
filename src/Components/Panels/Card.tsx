import { BoxProps, forwardRef, HStack, VStack } from '@chakra-ui/react';
import { ReactNode } from 'react';

export const Card = forwardRef<BoxProps & { leftIcon?: ReactNode; rightIcon?: ReactNode }, 'div'>(
    ({ children, leftIcon, rightIcon, ...rest }, ref) => (
        <HStack ref={ref} {...rest}>
            {leftIcon}
            <VStack spacing="0" alignItems="flex-start" justifyContent="center">
                {children}
            </VStack>
            {rightIcon}
        </HStack>
    ),
);
