import { Card } from '../../../../Components/Panels/Card'
import { Text } from '@chakra-ui/react'
import { useBlockchainProvider } from '../../../../Providers/Blockchain/BlockchainProvider'

export const HashupCard = () => {
    const { hashBalance } = useBlockchainProvider()
    return (
        <Card>
            <Text>Your hash</Text>
            <Text variant="primary">{hashBalance}</Text>
        </Card>
    )
}
