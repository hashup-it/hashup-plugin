import { Button, chakra, Link, SystemStyleObject, Text, Tooltip } from '@chakra-ui/react'
import { MetamaskIcon } from '../../../Components/Icons/MetamaskIcon'
import { useReflink } from '../../../Hooks/useReflink'
import { useBlockchainProvider } from '../../../Providers/Blockchain/BlockchainProvider'
import { useGame } from '../../../Providers/GameProvider/GameProvider'

const containerStyles: SystemStyleObject = {
    d: 'grid',
    gridTemplateAreas: '"referral gamexplorer" "addToMetamask addToMetamask"',
    gridTemplateColumns: '1fr 1fr',
    columnGap: '1rem',
    rowGap: '.5rem',
    bg: '#21242B',
    p: '1.4rem 1.2rem .5rem 1.2rem',
    borderRadius: '.25rem 0 .25rem 0',
    w: '100%'
}

export const AdditionalPanel = () => {
    const { copyReflink, hasCopied } = useReflink()
    const { game } = useGame()
    const { addTokenToMetamask } = useBlockchainProvider()

    return (
        <chakra.div __css={containerStyles}>
            <Tooltip label="Copied" isOpen={hasCopied}>
                <Button size="h-md" gridArea="referral" flexDir="column" textTransform="uppercase"
                        onClick={copyReflink}>
                    Copy referral<br />
                    <Text variant="secondary" textTransform="none" color="black">Earn <Text as="span"
                                                                                            color="white">2%</Text> on
                        every transaction</Text>
                </Button>
            </Tooltip>
            <Button size="h-md" as={Link} href="https://gamexplorer.io" isExternal gridArea="gamexplorer"
                    variant="outline" textTransform="uppercase">Gamexplorer</Button>
            <Button size="h-md" onClick={addTokenToMetamask} gridArea="addToMetamask" leftIcon={<MetamaskIcon />}
                    textTransform="uppercase" variant="ghost">
                Add&nbsp;<Text color="#FF3F3F">{game?.symbol}</Text>&nbsp;to your wallet
            </Button>
        </chakra.div>
    )
}
