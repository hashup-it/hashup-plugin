import { gql, useQuery } from '@apollo/client'
import React, { ReactNode } from 'react'
import { Game } from '../../Graphql/api'
import { getGame } from '../../Graphql/queries'

export const GameProvider = ({ children, cartridgeAddress }: { children: ReactNode, cartridgeAddress: string }) => {
    const { data } = useQuery(gql`${getGame}`, { variables: { id: cartridgeAddress } })
    return (
        <GameContext.Provider
            value={{
                cartridgeAddress,
                game: data?.getGame
            }}
        >
            {children}
        </GameContext.Provider>
    )
}

const GameContext = React.createContext({
    cartridgeAddress: '',
    game: {} as Game
})

export const useGame = () => {
    const context = React.useContext(GameContext)
    return context
}
