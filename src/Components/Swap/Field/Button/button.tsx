import { Flex } from '@chakra-ui/react';
import React from 'react';

export const Button = ({
    children,
    action,
}: {
    children: React.ReactElement;
    action: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}) => {
    return (
        <Flex
            background="#434955"
            borderRadius="2px"
            padding="2px 6px"
            fontSize="9px"
            lineHeight="11px"
            onClick={action}
            cursor="pointer"
        >
            {children}
        </Flex>
    );
};
