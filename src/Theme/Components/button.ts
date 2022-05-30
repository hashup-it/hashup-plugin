import { theme } from '@chakra-ui/react';

export const button = {
    baseStyle: {
        py: '7px',
        fontWeight: 'bold',
    },
    sizes: {
        'h-md': {
            h: '39px',
            fontSize: '0.75rem',
            borderRadius: '0.25rem',
        },
    },
    variants: {
        solid: {
            color: theme.colors.white,
            backgroundColor: '#FF3F3F',
        },
        outline: {
            color: theme.colors.white,
            borderColor: '#FF3F3F',
            borderWidth: '2px',
        },
        ghost: {
            color: theme.colors.white,
        },
    },
};
