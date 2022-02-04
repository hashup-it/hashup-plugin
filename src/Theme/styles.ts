import { theme } from "@chakra-ui/react";

export const styles = {
    global: {
        html: {
            fontSize: '12px',
        },
        body: {
            bg: theme.colors.white,
            fontSize: '0.825rem',
            fontWeight: '400',
            color: theme.colors.gray[400],
        },
    }
}