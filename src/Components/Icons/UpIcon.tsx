import { forwardRef, IconProps } from '@chakra-ui/react';
import { DownIcon } from './DownIcon';

export const UpIcon = forwardRef<IconProps, 'svg'>((props, ref) => (
    <DownIcon ref={ref} transform="rotate(180deg)" {...props} />
));
