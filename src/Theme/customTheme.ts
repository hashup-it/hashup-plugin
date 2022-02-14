
import { styles } from './styles';
import { button } from './Components/button';
import { heading } from './Components/heading';
import { tag } from './Components/tag';
import { text } from './Components/text';
import { extendTheme, theme } from '@chakra-ui/react';

export const customTheme = extendTheme({
	fonts: {
		heading: 'Sora',
		body: 'Sora',
	},
	config: {
		initialColorMode: 'dark',
	},
	styles,
	textStyles: {
		uppercase: {
			textTransform: 'uppercase',
		},
	},
	colors: {
		hashup: theme.colors.red,
	},
	components: {
		Heading: heading,
		Button: button,
		Text: text,
		Tag: tag,
	},
});
