import { Avatar, Button, InputGroup, InputRightElement, Heading, HStack, SystemStyleObject, Tag, Text, VStack, Square, InputLeftElement, Select, Grid, Box, NumberInput, NumberInputField, theme, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../../../Components/Panels/Card";
import { useBlockchainProvider } from "../../../Providers/Blockchain/BlockchainProvider";
import { useGame } from "../../../Providers/GameProvider/GameProvider";

const styles: SystemStyleObject = {
    w: '100%',
    alignItems: 'flex-start',
    p: '1.4rem 1.5rem',
    bg: '#21242B' // TODO: fix - twice
}

export const Body = () => {
    const { buyGame, approveGame, isBuyAllowed, quantity, updateQuantity, isLoadingBuyGame } = useBlockchainProvider();
    const { game, cartridgeAddress } = useGame();
    const [amount, setAmount] = useState<string>('');

    const calcAmountByQuantity = () => +quantity * game.cartridge?.unitPrice!;
    const calcQuantityByAmount = () => +amount / game.cartridge?.unitPrice!

    useEffect(() => {
        if (!game) return;
        updateQuantity(calcQuantityByAmount().toString());
    }, [amount]);

    useEffect(() => {
        if (!game) return;
        setAmount(calcAmountByQuantity().toString());
    }, [quantity]);

    const toSell = game ? (game!.cartridge!.totalSupply! - game!.cartridge!.sold!) : 0;

    return (
        <VStack __css={styles}>
            <HStack w="100%" justifyContent="space-between" mb="2rem">
                <Card leftIcon={<Avatar size="md" />}>
                    <Tag variant="solid" size="sm" minHeight=".825rem" px="0.2rem" borderRadius="2px" fontSize="0.5rem" textTransform="uppercase" bg={game?.cartridge?.type}>{game?.cartridge?.type}</Tag>
                    <Heading fontSize="1rem">{game?.title} {isLoadingBuyGame && <Spinner size="sm" />}</Heading>
                    <Text w="150px" variant="primary" color="red.500" isTruncated>{game?.id}</Text>
                </Card>

                <Card alignItems="flex-end">
                    <Text alignSelf="flex-end">Current price</Text>
                    <Heading fontSize="1rem" d="inline">{game?.cartridge?.unitPrice?.toFixed(2)} <Text d="inline" variant="primary">HASH</Text></Heading>
                </Card>
            </HStack>

            <Grid gridTemplateColumns="48% 20% 28%" gap="2%">
                <InputGroup h="39px" size="xs">
                    <InputLeftElement h="100%" w="6rem" children={
                        <Select variant="outline" h="39px !important" size="xs" w="100px" defaultValue="HASH"  borderColor={theme.colors.gray[500]}>
                            <option value="HASH">HASH</option>
                        </Select>
                    } />
                    <NumberInput h="39px" placeholder='Amount' value={amount} onChange={setAmount} borderColor={theme.colors.gray[500]}>
                        <NumberInputField  pl="6.5rem"  h="39px" />
                    </NumberInput>
                    <InputRightElement children={<Square />} />
                </InputGroup>
                {isBuyAllowed ? (
                    <Button size="h-md" onClick={() => buyGame()} isDisabled={!quantity}>
                        Buy
                    </Button>
                ) : (
                    <Button size="h-md" onClick={() => approveGame()} isDisabled={!quantity}>
                        Approve
                    </Button>
                )}
                <InputGroup h="39px" size="xs">
                    <NumberInput max={toSell} h="39px"  placeholder='Items' precision={2} value={quantity} onChange={updateQuantity} borderColor={theme.colors.gray[500]}>
                        <NumberInputField h="39px" pr="38px" />
                    </NumberInput>
                    <InputRightElement onClick={() => updateQuantity(toSell.toString())} w="auto" m=".5rem" children={<Box verticalAlign="middle" textAlign="center" px=".3rem" py=".3rem" h="100%" bg="#fff" fontSize="9px" color="black">{toSell}</Box>} />
                </InputGroup>
            </Grid>
        </VStack>
    );
};