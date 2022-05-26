import { Card } from '../../../../Components/Panels/Card'
import { Text } from '@chakra-ui/react'
import { HashupAvatar } from './HashupAvatar'
import { useBlockchainProvider } from '../../../../Providers/Blockchain/BlockchainProvider'

export const AccountCard = ({ onCollapse }: { onCollapse: () => void }) => {
    const { account } = useBlockchainProvider()
    return (
        <Card rightIcon={<HashupAvatar onCollapse={onCollapse} />}>
            <Text variant="primary">Account</Text>
            <Text isTruncated w="100px">{account}</Text>
        </Card>
    )
}
