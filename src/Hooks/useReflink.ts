import { useClipboard } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useBlockchainProvider } from '../Providers/Blockchain/BlockchainProvider'

export const useReflink = () => {
    const { account } = useBlockchainProvider()
    const [reflink, setReflink] = useState<string>('')
    const { hasCopied, onCopy: copyReflink } = useClipboard(reflink)

    const prepareReflink = () => {
        const buddyAccount = localStorage.getItem('buddy') ?? (account as string)
        return `${window.location.protocol}//${window.location.host}?buddy=${buddyAccount}`
    }

    useEffect(() => {
        const reflink = prepareReflink()
        setReflink(reflink)
    }, [account])

    return {
        copyReflink,
        reflink,
        hasCopied
    }
}
