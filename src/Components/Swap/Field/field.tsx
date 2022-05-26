import React from 'react'
import { Flex, NumberInput, NumberInputField, Text } from '@chakra-ui/react'
import { Button } from './Button/button'
import { IToken } from '../swap'
import { TokenSelector } from '../TokenSelector/tokenSelector'
import { getBalanceDecimals, safeSimplifyBalance } from '../../../Utils/parser';
import { ethers } from 'ethers';

export enum TokenType {
    SWAPPED,
    RETRIEVED,
}

const FieldText = {
    [TokenType.SWAPPED]: 'From',
    [TokenType.RETRIEVED]: 'To'
}

export const Field = (
    {
        type,
        data,
        value,
        setValue
    }: {
        type: TokenType;
        data: IToken;
        value: string;
        setValue: ((event: React.ChangeEvent<HTMLInputElement>) => void) | ((value: string) => void) | any;
    }) => {
    const handleValueChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const payload = event.target.value;

        if (payload === '0' || payload === '0.' || payload === '.' || payload === '') {
            setValue(isNaN(payload as any) ? '0.' : '0');

            return
        }

        if (isNaN(Number(payload)) || getBalanceDecimals(payload) > (type === TokenType.SWAPPED ? 6 : 0)) {
            setValue('0');
            return;
        }

        const output = safeSimplifyBalance(payload);

        console.log('setting out', output)
        setValue(output);
    };

    const handleValueMaxOut = async () => {
        const payload = data.value;

        const output = safeSimplifyBalance(payload);

        setValue(output);
    };

    /**
     * Is allowed to be inaccurate (hence the `Number` conversion)
     */
    const handleValueHalve = async () => {
        const payload = data.value;

        const value = ethers.utils.parseUnits(payload, 6);
        const valueHalved = value.div(2);
        const valueFormatted = ethers.utils.formatUnits(valueHalved, 6);

        const output = safeSimplifyBalance(valueFormatted);

        setValue(output);
    };

    return (
        <Flex
            minWidth="346px"
            background="#12151A"
            borderRadius="8px"
            flexDirection="column"
            fontSize="12px"
            lineHeight="13px"
            padding="16px"
            gridGap="12px"
        >
            <Flex flexGrow="1" justifyContent="space-between" alignItems="center" gridGap="3em">
                <Text letterSpacing="1%">{FieldText[type]}</Text>
                <Flex alignItems="center" gridGap="6px">
                    <Flex alignItems="center" gridGap="12px">
                        {type === TokenType.SWAPPED && (
                            <Flex gridGap="4px" textTransform="uppercase">
                                <Button action={handleValueMaxOut}>
                                    <Text>Max</Text>
                                </Button>
                                <Button action={handleValueHalve}>
                                    <Text>Half</Text>
                                </Button>
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" flexDirection="row">
                <TokenSelector data={data} />
                <NumberInput value={value ?? ''} variant="unstyled" textAlign="right" fontWeight="600" fontSize="16px"
                             lineHeight="20px" width="100%">
                    <NumberInputField
                        placeholder="0"
                        _placeholder={{ color: 'white' }}
                        variant="unstyled"
                        textAlign="right"
                        fontWeight="600"
                        fontSize="16px"
                        lineHeight="20px"
                        padding="0"
                        onChange={handleValueChange}
                        autoFocus={type === TokenType.SWAPPED}
                    />
                </NumberInput>
            </Flex>
        </Flex>
    )
}
