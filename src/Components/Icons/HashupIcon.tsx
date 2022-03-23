import Icon from '@chakra-ui/icon'
import { forwardRef, IconProps } from '@chakra-ui/react'

export const HashupIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
    <Icon ref={ref} viewBox="0 0 24 25" fill="transparent" {...props}>
        <path
            d="M5.99978 19.3741L2.52594 18.4433L8.7816 3.30097C8.99293 2.78942 9.47142 2.43801 10.0228 2.38945L12.5697 2.16512C12.7911 2.14562 12.9545 2.36737 12.8704 2.57305L5.99978 19.3741Z"
            fill="white" />
        <path
            d="M14.2282 20.2742C14.0367 20.7397 13.6222 21.0764 13.1274 21.1684L10.335 21.6878C10.1042 21.7307 9.91723 21.5012 10.0061 21.2838L17.0443 4.05714L20.5177 4.98782L14.2282 20.2742Z"
            fill="white" />
        <path d="M12.4188 17.4387L13.3496 13.9648L18.5805 15.3665L17.123 18.6992L12.4188 17.4387Z" fill="white" />
        <path d="M4.18401 8.05707L5.59487 4.71241L9.55716 5.7741L8.62648 9.24743L4.18401 8.05707Z" fill="white" />
        <path d="M9.51415 9.56284L10.9364 6.22122L18.6171 8.20138L17.0741 11.5106L9.51415 9.56284Z" fill="white" />
        <path d="M18.4681 12.7441L20.2188 8.63064L21.129 8.87452L20.9513 13.4095L18.4681 12.7441Z" fill="#FF3F3F" />
        <path d="M6.44162 15.8371L8.15467 12.5729L13.5833 14.0275L12.1847 17.376L6.44162 15.8371Z" fill="white" />
        <path d="M2.17031 14.6923L2.41498 10.1484L4.67141 10.753L2.93993 14.8985L2.17031 14.6923Z" fill="#FF3F3F" />
        <path d="M8.16442 9.1448L2.53071 18.4406L6.53357 8.69924L8.16442 9.1448Z" fill="url(#paint0_linear_56_87)" />
        <path d="M14.899 14.3647L20.4641 5.02622L16.489 14.8045L14.899 14.3647Z" fill="url(#paint1_linear_56_87)" />
        <defs>
            <linearGradient id="paint0_linear_56_87" x1="6.84899" y1="9.47645" x2="4.51141" y2="14.2322"
                            gradientUnits="userSpaceOnUse">
                <stop stopColor="#D8D8D8" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="paint1_linear_56_87" x1="16.3282" y1="14.6556" x2="18.9739" y2="7.5541"
                            gradientUnits="userSpaceOnUse">
                <stop stopColor="#DFDFDF" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
        </defs>
    </Icon>
))
