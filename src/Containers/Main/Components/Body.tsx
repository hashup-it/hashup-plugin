import { Avatar, Button, InputGroup, InputRightElement, Heading, HStack, SystemStyleObject, Tag, Text, VStack, Square, InputLeftElement, Select, Grid, Box, NumberInput, NumberInputField } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Card } from "../../../Components/Panels/Card";
import { useBlockchainProvider } from "../../../Providers/Blockchain/BlockchainProvider";
import { useGame } from "../../../Providers/GameProvider/GameProvider";

const styles: SystemStyleObject = {
    bg: '#21242B',
    w: '100%',
    alignItems: 'flex-start',
    p: '1.75rem 1.5rem',
}

export const Body = () => {
    const { buyGame } = useBlockchainProvider();
    const { game, cartridgeAddress } = useGame();

    const [amount, setAmount] = useState<string>('');
    const [items, setItems] = useState<string>('');

    const handleClear = () => {
        setAmount('');
        setItems('');
    }

    const calcAmountByItems = () => +items * game.cartridge?.unitPrice!;
    const calcItemsByAmount = () => +amount / game.cartridge?.unitPrice!

    useEffect(() => {
        if (!game) return;
        setItems(calcItemsByAmount().toString());
    }, [amount]);

    useEffect(() => {
        if (!game) return;
        setAmount(calcAmountByItems().toString());
    }, [items]);

    const toSell = game ? (game!.cartridge!.totalSupply! - game!.cartridge!.sold!) : 0;

    return (
        <VStack __css={styles}>
            <HStack w="100%" justifyContent="space-between" mb="2rem">
                <Card leftIcon={<Avatar size="lg" />}>
                    <Tag variant="solid" textTransform="uppercase" bg={game?.cartridge?.type}>{game?.cartridge?.type}</Tag>
                    <Heading size="md">{game?.title}</Heading>
                    <Text w="150px" variant="primary" color="red.500" isTruncated>{game?.id}</Text>
                </Card>

                <Card>
                    <Text alignSelf="flex-end">Current price</Text>
                    <Heading d="inline">{game?.cartridge?.unitPrice}<Text d="inline" variant="primary">USDT</Text></Heading>
                </Card>
            </HStack>

            <Grid gridTemplateColumns="55% 13% 28%" gap="2%">
                <InputGroup h="39px">
                    <InputLeftElement h="100%" w="6rem" children={
                        <Select variant="outline" h="39px !important" defaultValue="USDT">
                            <option value="USDT">USDT</option>
                        </Select>
                    } />
                    <NumberInput pl="6.5rem" h="39px" placeholder='Amount' value={amount} onChange={setAmount}>
                        <NumberInputField h="39px" />
                    </NumberInput>
                    <InputRightElement children={<Square />} />
                </InputGroup>
                <Button onClick={() => buyGame({ amount: (+items).toFixed(2), cartridgeAddress, callback: handleClear })}>Buy</Button>
                <InputGroup h="39px">
                    <NumberInput max={toSell} h="39px"  placeholder='Items' precision={2} value={items} onChange={setItems}>
                        <NumberInputField h="39px" pr="38px" />
                    </NumberInput>
                    <InputRightElement onClick={() => setItems(toSell.toString())} m=".5rem" children={<Box minW="20px" textAlign="center" p=".5rem .3rem" h="90%" bg="#fff" fontSize="9px" color="black">{toSell}</Box>} />
                </InputGroup>
            </Grid>
        </VStack>
    );
};