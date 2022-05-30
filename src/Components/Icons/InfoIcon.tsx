import Icon from '@chakra-ui/icon';
import { forwardRef, IconProps } from '@chakra-ui/react';

export const InfoIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
    <Icon ref={ref} viewBox="0 0 14 14" fill="transparent" {...props}>
        <path
            d="M7 13C10.3137 13 13 10.3137 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.3137 3.68629 13 7 13Z"
            stroke="#FF3F3F"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M7 4.6001V7.0001" stroke="#FF3F3F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 9.3999H7.005" stroke="#FF3F3F" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
));
