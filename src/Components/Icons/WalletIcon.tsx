import Icon from '@chakra-ui/icon';
import { forwardRef, IconProps, theme } from '@chakra-ui/react';

export const WalletIcon = forwardRef<IconProps, 'svg'>(({ color = theme.colors.white, ...rest }, ref) => (
    <Icon ref={ref} viewBox="0 0 15 15" fill="transparent" {...rest}>
        <path
            d="M8.72019 7.04589V7.05176M3.43579 10.5688H11.656C12.3045 10.5688 12.8303 10.0431 12.8303 9.39451V4.69726C12.8303 4.04871 12.3045 3.52295 11.656 3.52295H3.43579C2.78723 3.52295 2.26147 4.04871 2.26147 4.69726V9.39451C2.26147 10.0431 2.78723 10.5688 3.43579 10.5688ZM12.8303 5.28442H8.72019C7.74736 5.28442 6.95872 6.07305 6.95872 7.04589C6.95872 8.01872 7.74736 8.80735 8.72019 8.80735H12.8303V5.28442Z"
            stroke="white"
            strokeWidth="1.17431"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </Icon>
));
