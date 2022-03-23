import { Button, Flex, Heading, HStack, Image, Spinner, SystemStyleObject, Tag, Text, VStack } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { Card } from '../../../Components/Panels/Card'
import { Field, TokenType } from '../../../Components/Swap/Field/field'
import { useBlockchainProvider } from '../../../Providers/Blockchain/BlockchainProvider'
import { useGame } from '../../../Providers/GameProvider/GameProvider'
import { IToken } from '../../../Components/Swap/swap'

const styles: SystemStyleObject = {
    w: '476px',
    alignItems: 'flex-start',
    p: '1.4rem 1.5rem',
    bg: '#21242B' // TODO: fix - twice
}

export const Body = () => {
    const {
        buyGame,
        approveGame,
        isBuyAllowed,
        quantity,
        updateQuantity,
        isLoadingBuyGame,
        hashBalance
    } = useBlockchainProvider()
    const { game, cartridgeAddress } = useGame()
    const [amount, setAmount] = useState<string>('')

    const calcAmountByQuantity = () => +quantity * game.cartridge?.unitPrice!
    const calcQuantityByAmount = () => +amount / game.cartridge?.unitPrice!

    useEffect(() => {
        if (!game) return
        updateQuantity(calcQuantityByAmount().toString())
    }, [amount])

    useEffect(() => {
        if (!game) return
        setAmount(calcAmountByQuantity().toString())
    }, [quantity])

    const toSell = game ? (game!.cartridge!.totalSupply! - game!.cartridge!.sold!) : 0

    const tokenSwapped: IToken = {
        address: '',
        imageSymbol: '/assets/coins/hash-icon.svg',
        isLoading: false,
        symbol: 'Hash',
        value: hashBalance.toString()
    }
    const tokenRetrieved: IToken = {
        address: '', imageSymbol: game?.media?.logo, isLoading: false, symbol: game?.symbol, value: quantity
    }

    return (
        <VStack __css={styles}>
            <HStack w="100%" justifyContent="space-between" mb="2rem">
                <Card leftIcon={<Image src={game?.media?.logo} w="80px" maxH="60px" />}>
                    <Tag variant="solid" size="sm" minHeight=".825rem" px="0.2rem" borderRadius="2px" fontSize="0.5rem"
                         textTransform="uppercase" bg={game?.cartridge?.type}>{game?.cartridge?.type}</Tag>
                    <Heading fontSize="1rem">{game?.title} {isLoadingBuyGame && <Spinner size="sm" />}</Heading>
                    <Text w="150px" variant="primary" color="#FF3F3F" isTruncated>{game?.id}</Text>
                </Card>

                <Card alignItems="flex-end">
                    <Text alignSelf="flex-end">Current price</Text>
                    <Heading fontSize="1rem" d="inline">{game?.cartridge?.unitPrice?.toFixed(2)} <Text d="inline"
                                                                                                       variant="primary">HASH</Text></Heading>
                </Card>
            </HStack>

            // Swapping component
            <Flex gridGap="16px" flexDirection="column" color="white" width="100%">
                <Flex flexDirection="column" gridGap="16px">
                    <Field type={TokenType.SWAPPED} data={tokenSwapped} value={amount} setValue={setAmount} />
                    <Field type={TokenType.RETRIEVED} data={tokenRetrieved} value={quantity}
                           setValue={updateQuantity} />
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
    )
}
