import { forwardRef, IconButton, IconButtonProps, SystemStyleObject, useStyleConfig } from '@chakra-ui/react'
import { DownIcon } from '../Icons/DownIcon'
import { UpIcon } from '../Icons/UpIcon'

export enum EXPANSION_BTN_MODE {
    EXPAND = 'EXPAND',
    COLLAPSE = 'COLLAPSE',
}

export const expandIconOptions = {
    [EXPANSION_BTN_MODE.EXPAND]: <DownIcon />,
    [EXPANSION_BTN_MODE.COLLAPSE]: <UpIcon />
}

export const ExpansionButton = forwardRef<IconButtonProps & { mode: EXPANSION_BTN_MODE }, 'div'>(({
                                                                                                      variant,
                                                                                                      size,
                                                                                                      mode,
                                                                                                      ...rest
                                                                                                  }, ref) => {
    const styles = useStyleConfig('Button', { variant, size: 'sm' })
    const cssStyles: SystemStyleObject = {
        ...styles,
        px: '1rem !important',
        py: '.2rem !important',
        height: 'auto',
        borderRadius: '0 0 0.25rem 0.25rem'
    }

    return <IconButton size="md" ref={ref} __css={cssStyles} {...rest} icon={expandIconOptions[mode]} />
})
