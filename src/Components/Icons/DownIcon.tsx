import Icon from '@chakra-ui/icon'
import { forwardRef, IconProps, theme } from '@chakra-ui/react'

export const DownIcon = forwardRef<IconProps, 'svg'>(({ color = theme.colors.white, ...rest }, ref) => (
    <Icon ref={ref} viewBox="0 0 6 4" fill="transparent" {...rest}>
        <path d="M0.88385 0.941895L2.99999 3.05804L5.11613 0.941895" stroke={color as any} strokeWidth="0.70538"
              strokeLinecap="round" strokeLinejoin="round" />
    </Icon>
))
