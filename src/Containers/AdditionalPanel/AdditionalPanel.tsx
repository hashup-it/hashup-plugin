import { Button, Center, chakra, Container, Grid, HStack, Link, SimpleGrid, SystemStyleObject, Text, useStyleConfig, VStack } from "@chakra-ui/react";
import { MetamaskIcon } from "../../Components/Icons/MetamaskIcon";

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

    return (
        <chakra.div __css={containerStyles}>
            <Button gridArea="referral" flexDir="column" textTransform="uppercase">
                Copy referral<br />
                <Text textTransform="none" color="black" fontSize="sm">Earn <Text as="span" color="white">2%</Text> on every transaction</Text>
            </Button>
            <Button gridArea="gamexplorer" variant="outline" textTransform="uppercase">Gamexplorer</Button>
            <Button gridArea="addToMetamask" as={Link} leftIcon={<MetamaskIcon />} textTransform="uppercase" variant="ghost">
                Add&nbsp;<Text color="red">2047</Text>&nbsp;to your wallet
            </Button>
        </chakra.div>
    );
};
