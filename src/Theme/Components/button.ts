import { theme } from "@chakra-ui/react";

export const button = {
    baseStyle: {
        py: '7px',
        fontWeight: 'bold',
    },
    sizes: {
        md: {
            h: '38px',
        },
    },
    variants: {
        solid: {
            color: theme.colors.white,
            backgroundColor: theme.colors.red[500],
        },
        outline: {
            color: theme.colors.white,
            borderColor: theme.colors.red[500],
            borderWidth: '2px'
        },
        ghost: {
            color: theme.colors.white,
        }
    }
}