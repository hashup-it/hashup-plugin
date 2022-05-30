import { Button, ButtonProps, Flex, Text, forwardRef, SystemStyleObject, useStyleConfig } from '@chakra-ui/react';
import { HashupIcon } from '../Icons/HashupIcon';

export const PoweredByButton = forwardRef<ButtonProps, 'button'>(({ variant, size, ...rest }, ref) => {
    const styles = useStyleConfig('Button', { variant, size: 'sm' });
    const cssStyles: SystemStyleObject = {
        ...styles,
        borderRadius: '0 0 .25rem .25rem',
        fontSize: '0.625rem',
        backgroundColor: '#0A0A08',
        px: '1rem !important',
        py: '.3rem !important',
        height: 'auto',
        opacity: '0.2',
    };

    return (
        <Button
            size="h-md"
            ref={ref}
            __css={cssStyles}
            rightIcon={
                <Flex alignItems="center" transform="translateY(12.5%)">
                    <HashupIcon />
                    <Text>HashUp</Text>
                </Flex>
            }
            {...rest}
        >
            Powered by
        </Button>
    );
});
