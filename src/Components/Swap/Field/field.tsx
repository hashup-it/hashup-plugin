import React from 'react'
import { Flex, NumberInput, NumberInputField, Text } from '@chakra-ui/react'
import { Button } from './Button/button'
import { IToken } from '../swap'
import { TokenSelector } from '../TokenSelector/tokenSelector'

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
        setValue(event.target.value)
    }
    const handleValueMaxOut = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setValue(parseFloat(data.value))
    }
    const handleValueHalve = async (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setValue((parseFloat(data.value) / 2).toString())
    }

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
                <TokenSelector data={data} isSelectable={type === TokenType.SWAPPED} />
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
                        disabled={type === TokenType.RETRIEVED}
                    />
                </NumberInput>
            </Flex>
        </Flex>
    )
}
