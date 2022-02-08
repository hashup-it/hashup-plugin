import { Button, Center, chakra, Container, Grid, HStack, Link, SimpleGrid, SystemStyleObject, Text, Tooltip, useStyleConfig, VStack } from "@chakra-ui/react";
import { MetamaskIcon } from "../../../Components/Icons/MetamaskIcon";
import { useReflink } from "../../../Hooks/useReflink";
import { useBlockchainProvider } from "../../../Providers/Blockchain/BlockchainProvider";
import { useGame } from "../../../Providers/GameProvider/GameProvider";

const containerStyles: SystemStyleObject = {
    d: 'grid',
    gridTemplateAreas: '"referral gamexplorer" "addToMetamask addToMetamask"',
    gridTemplateColumns: "1fr 1fr",
    gap: '1rem',
    bg: "#21242B",
    p: "1.4rem 1.2rem .5rem 1.2rem",
    borderRadius: ".25rem 0 .25rem 0",
    w: "100%",
}

export const AdditionalPanel = () => {
    const { copyReflink, hasCopied } = useReflink();
    const { game } = useGame();
    const { addTokenToMetamask } = useBlockchainProvider();

    return (
        <chakra.div __css={containerStyles}>
            <Tooltip label='Copied' isOpen={hasCopied}>
                <Button gridArea="referral" flexDir="column" textTransform="uppercase" onClick={copyReflink}>
                    Copy referral<br />
                    <Text textTransform="none" color="black" fontSize="sm">Earn <Text as="span" color="white">2%</Text> on every transaction</Text>
                </Button>
            </Tooltip>
            <Button as={Link} href="https://gamexplorer.io" isExternal gridArea="gamexplorer" variant="outline" textTransform="uppercase">Gamexplorer</Button>
            <Button onClick={addTokenToMetamask} gridArea="addToMetamask" leftIcon={<MetamaskIcon />} textTransform="uppercase" variant="ghost">
                Add&nbsp;<Text color="red">{game.symbol}</Text>&nbsp;to your wallet
            </Button>
        </chakra.div>
    );
}