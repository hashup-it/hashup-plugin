// import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { IToken } from '../swap';

export const TokenSelector = ({ data, isSelectable = false }: { data: IToken; isSelectable?: boolean }) => {
    return (
        <Flex
            fontWeight="600"
            fontSize="16px"
            lineHeight="20px"
            alignItems="center"
            gridGap="8px"
            cursor={isSelectable ? 'pointer' : 'unset'}
        >
            <Flex
                background="url('/assets/token-selector-icon-base.svg')"
                width="40px"
                height="40px"
                alignItems="center"
                justifyContent="center"
            >
                <Flex
                    background={`url('${data.imageSymbol}')`}
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    backgroundPosition="center center"
                    width="35px"
                    height="35px"
                    borderRadius="full"
                />
            </Flex>
            <Text>{data.symbol}</Text>
            {isSelectable && (
                <Flex background="url('/assets/token-selector-dropdown.svg')" width="20px" height="20px" />
            )}
        </Flex>
    );
};
