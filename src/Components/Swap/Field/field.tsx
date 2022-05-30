import React, { useRef } from 'react';
import { Flex, NumberInput, NumberInputField, Text } from '@chakra-ui/react';
import { Button } from './Button/button';
import { IToken } from '../swap';
import { getBalanceDecimals, prettyPrintBalance, safeSimplifyBalance } from '../../../Utils/parser';
import { ethers } from 'ethers';
import { decimals } from '../../../Providers/Blockchain/BlockchainProvider';
import { colors } from '../../../Utils/colors';

export enum FieldType {
    SWAPPED,
    RETRIEVED,
}

const fieldText = {
    [FieldType.SWAPPED]: 'You Sell',
    [FieldType.RETRIEVED]: 'You Get',
};

const fieldDecimals = {
    [FieldType.SWAPPED]: decimals.paymentToken,
    [FieldType.RETRIEVED]: decimals.game,
};

export const Field = ({
    type,
    data,
    value,
    setValue,
    updateSwapVariable,
}: {
    type: FieldType;
    data: IToken;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
    updateSwapVariable: (payload: string) => void;
}) => {
    const inputElement = useRef(null as unknown as any);

    const handleValueChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const payload = event.target.value;

        if (fieldDecimals[type] === 0 && payload.includes('.')) {
            return;
        }

        if (payload === '0' || payload === '0.' || payload === '.' || payload === '') {
            setValue(isNaN(payload as any) ? '0.' : '');
            await updateSwapVariable('0');

            return;
        }

        if (isNaN(Number(payload)) || getBalanceDecimals(payload) > fieldDecimals[type]) {
            return;
        }

        const output = safeSimplifyBalance(payload);

        setValue(output);
        await updateSwapVariable(output);
    };

    const handleValueMaxOut = async () => {
        const payload = data.value;

        const output = safeSimplifyBalance(payload);

        setValue(output);
        await updateSwapVariable(output);
    };

    /**
     * Is allowed to be inaccurate (hence the `Number` conversion)
     */
    const handleValueHalve = async () => {
        const payload = data.value;

        const value = ethers.utils.parseUnits(payload, fieldDecimals[type]);
        const valueHalved = value.div(2);
        const valueFormatted = ethers.utils.formatUnits(valueHalved, fieldDecimals[type]);

        const output = safeSimplifyBalance(valueFormatted);

        setValue(output);
        await updateSwapVariable(output);
    };

    return (
        <Flex
            minWidth="346px"
            background={colors.backgroundAccent}
            borderRadius="8px"
            flexDirection="column"
            fontSize="12px"
            lineHeight="13px"
            padding="16px"
            gridGap="12px"
            userSelect="none"
            onClick={(event) => {
                if (event.target !== event.currentTarget) {
                    return;
                }

                inputElement.current.focus();
            }}
        >
            <Flex flexGrow={1} justifyContent="space-between" alignItems="center" gridGap="3em">
                <Text letterSpacing="1%">{fieldText[type]}</Text>
                <Flex alignItems="center" gridGap="6px">
                    <Text>Available</Text>
                    <Flex alignItems="center" gridGap="12px">
                        <Text color={colors.main}>
                            {prettyPrintBalance(data.value) || '…'} {data.symbol}
                        </Text>
                        {type === FieldType.SWAPPED && (
                            <Flex gridGap="4px">
                                <Button action={handleValueMaxOut}>
                                    <Text userSelect="none">Max</Text>
                                </Button>
                                <Button action={handleValueHalve}>
                                    <Text userSelect="none">Half</Text>
                                </Button>
                            </Flex>
                        )}
                    </Flex>
                </Flex>
            </Flex>
            <Flex justifyContent="space-between" alignItems="center" flexDirection="row" gridGap="8px">
                <NumberInput
                    value={value}
                    variant="unstyled"
                    textAlign="right"
                    fontWeight="600"
                    fontSize="16px"
                    lineHeight="20px"
                    minWidth={`${value.length * 0.86}ch`}
                    transition="all cubic-bezier(0.42, 0, 0, 1.11)"
                    transitionDuration="1s"
                    width="100%"
                >
                    <NumberInputField
                        ref={inputElement}
                        placeholder={'0'}
                        _placeholder={{ color: 'white' }}
                        textAlign="right"
                        fontWeight="600"
                        fontSize="16px"
                        lineHeight="20px"
                        padding="0"
                        onChange={handleValueChange}
                        autoFocus={type === FieldType.SWAPPED}
                    />
                </NumberInput>
            </Flex>
        </Flex>
    );
};
