import { Button, Flex, Heading, HStack, Image, Spinner, SystemStyleObject, Tag, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from '../../../Components/Panels/Card';
import { Field, FieldType } from '../../../Components/Swap/Field/field';
import { useBlockchainProvider } from '../../../Providers/Blockchain/BlockchainProvider';
import { useGame } from '../../../Providers/GameProvider/GameProvider';
import { IToken } from '../../../Components/Swap/swap';

const styles: SystemStyleObject = {
    w: '476px',
    alignItems: 'flex-start',
    p: '1.4rem 1.5rem',
    bg: '#21242B', // TODO **LEGACY**: fix - twice
};

export const Body = () => {
    const { buyGame, approveGame, isBuyAllowed, quantity, updateQuantity, isLoadingBuyGame, hashBalance, gameBalance } =
        useBlockchainProvider();
    const { data: game } = useGame();
    /** Payment token total */
    const [amount, setAmount] = useState<string>('');

    const [valueSwapped, setValueSwapped] = useState('');
    const [valueRetrieved, setValueRetrieved] = useState('');

    const handleUpdateRetrieved = (amount: string) => {
        const newValue = parseInt((+amount / Number(game.price)).toString(), 10).toString();

        updateQuantity(newValue);
        setValueRetrieved(newValue);
    };

    const handleUpdateSwapped = (quantity: string) => {
        const integerTruncated = parseInt(quantity, 10).toString();
        const newValue = (+integerTruncated * Number(game.price)).toString();

        setAmount(newValue);
        setValueSwapped(newValue);
    };

    /** Payment token */
    const tokenSwapped: IToken = {
        address: '0xf583F23e2b26f1ABd88804704E3826DeafC8A21d',
        imageSymbol: '/assets/coins/usdc-icon.png',
        isLoading: false,
        symbol: 'USDC',
        value: hashBalance.toString(),
    };

    /** Purchased cartridge (token) */
    const tokenRetrieved: IToken = {
        address: game.address,
        imageSymbol: game.media.logoUrl,
        isLoading: false,
        symbol: game.symbol,
        value: gameBalance.toString(),
    };

    return (
        <VStack __css={styles}>
            <HStack w="100%" justifyContent="space-between" mb="2rem">
                <Card leftIcon={<Image src={game.media.logoUrl} w="80px" maxH="60px" />}>
                    <Tag
                        variant="solid"
                        size="sm"
                        minHeight=".825rem"
                        px="0.2rem"
                        borderRadius="2px"
                        fontSize="0.5rem"
                        textTransform="uppercase"
                        bg={game.color}
                    >
                        {game.color}
                    </Tag>
                    <Heading fontSize="1rem">
                        {game.name} {isLoadingBuyGame && <Spinner size="sm" />}
                    </Heading>
                    <Text w="150px" variant="primary" color="#FF3F3F" isTruncated>
                        {game.address}
                    </Text>
                </Card>

                <Card alignItems="flex-end">
                    <Text alignSelf="flex-end">Current price</Text>
                    <Heading fontSize="1rem" d="inline">
                        {Number(game.price).toFixed(2)}{' '}
                        <Text display="inline" variant="primary">
                            USDC
                        </Text>
                    </Heading>
                </Card>
            </HStack>

            <Flex gridGap="16px" flexDirection="column" color="white" width="100%">
                <Flex flexDirection="column" position="relative" gridGap="16px">
                    <Field
                        type={FieldType.SWAPPED}
                        data={tokenSwapped}
                        value={valueSwapped}
                        setValue={setValueSwapped}
                        updateSwapVariable={handleUpdateRetrieved}
                    />
                    <Field
                        type={FieldType.RETRIEVED}
                        data={tokenRetrieved}
                        value={valueRetrieved}
                        setValue={setValueRetrieved}
                        updateSwapVariable={handleUpdateSwapped}
                    />
                    <Image
                        src="/assets/button-switch.svg"
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                    />
                </Flex>
                <Button
                    filter="drop-shadow(0px 9px 12px rgba(255, 63, 63, 0.2))"
                    onClick={isBuyAllowed ? buyGame : approveGame}
                    _hover={{ background: quantity ? '#FF3F3F' : 'gray' }}
                    isDisabled={!quantity}
                    _disabled={{ background: 'gray', filter: 'none', cursor: 'not-allowed' }}
                >
                    <Text>{isBuyAllowed ? 'Buy' : 'Approve'}</Text>
                </Button>
            </Flex>
        </VStack>
    );
};
