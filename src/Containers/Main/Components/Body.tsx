import { Avatar, Button, chakra, Input, InputGroup, InputRightElement, Heading, HStack, SystemStyleObject, Tag, Text, useStyleConfig, VStack, Square, InputLeftElement, Select, Grid, Box } from "@chakra-ui/react";
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
    const { addTokenToMetamask, buyGame } = useBlockchainProvider();
    const { game } = useGame();
    return (
    <VStack __css={styles}>
        <HStack w="100%" justifyContent="space-between" mb="2rem">
            <Card leftIcon={<Avatar size="lg" />}>
                <Tag variant="solid" textTransform="uppercase" bg={game?.cartridge?.type}>{game?.cartridge?.type}</Tag>
                <Heading size="md">{game.title}</Heading>
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
                    <Select variant="outline" h="39px !important">
                      <option selected>USDT</option>
                    </Select>
                } />
                <Input pl="6.5rem" h="39px" placeholder='Amount' />
                <InputRightElement children={<Square />} />
            </InputGroup>
            <Button onClick={() => buyGame({ amount: 10, cartridgeAddress: process.env.REACT_APP_CARTRIDGE as any })}>Buy</Button>
            <InputGroup h="39px">
                <Input h="39px" placeholder='Items' />
                <InputRightElement m=".5rem" children={<Box p=".5rem .3rem" h="90%" bg="#fff" fontSize="9px" color="black">2048</Box>} />
            </InputGroup>
        </Grid>
    </VStack>
    )
};