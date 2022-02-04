import { extendTheme, withDefaultColorScheme, theme as baseTheme } from "@chakra-ui/react";
import { button } from "./Components/button";
import { heading } from "./Components/heading";
import { tag } from "./Components/tag";
import { text } from "./Components/text";
import { styles } from "./styles";

const overrides = {
    fonts: {
        heading: 'Sora',
        body: 'Sora'
    },
    config: {
        initialColorMode: 'dark'
    },
    styles,
    textStyles: {
        uppercase: {
            textTransform: 'uppercase'
        }
    },
    colors: {
        hashup: baseTheme.colors.red,
    },
    components: {
        Heading: heading,
        Button: button,
        Text: text,
        Tag: tag
    }
};

export const chakraTheme = extendTheme(
    overrides,
    // withDefaultSize({ size: 'xl' }),
    withDefaultColorScheme({ colorScheme: 'hashup' }),
);
