import React, { ReactNode, useEffect, useState } from 'react';
import { useMoralisQuery } from 'react-moralis';
import { ethers } from 'ethers';

export enum GameState {
    LOADING,
    LOADED,
}

interface IGame {
    media: {
        coverImageUrl: string;
        logoUrl: string;
        banner: string;
    };
    colors: {
        actionColor: string;
        textColor: string;
        backgroundColor: string;
    };
    screenshots: string[];
    socials: {
        facebook: string;
        twitter: string;
        youtube: string;
        discord: string;
    };
    symbol: string;
    genres: string[];
    platforms: string[];
    color: string;
    name: string;
    address: string;
    paymentToken: string;
    price: string;
    description: string;
    gameUrl: string;
    gamepaper: string;
    video: string;
    listed: boolean;
    createdAt: string;
    updatedAt: string;
}

export const emptyGame: IGame = {
    address: '',
    color: '',
    colors: { actionColor: '', backgroundColor: '', textColor: '' },
    createdAt: '',
    description: '',
    gameUrl: '',
    gamepaper: '',
    listed: false,
    media: { banner: '', coverImageUrl: '', logoUrl: '' },
    name: '',
    paymentToken: '',
    price: '',
    screenshots: [],
    socials: { discord: '', facebook: '', twitter: '', youtube: '' },
    symbol: '',
    updatedAt: '',
    video: '',
    genres: [],
    platforms: [],
};

export const GameProvider = ({ children, cartridgeAddress }: { children: ReactNode; cartridgeAddress: string }) => {
    const [state, handleState] = useState<GameState>(GameState.LOADING);
    const [providedGameData, setProvidedGameData] = useState<IGame>({ ...emptyGame, address: cartridgeAddress });

    const { data: queryData, isLoading } = useMoralisQuery('Games', (query) =>
        query.equalTo('address', cartridgeAddress?.toLowerCase()),
    );

    useEffect(() => {
        if (isLoading) {
            handleState(GameState.LOADING);
        } else if (queryData.length > 0) {
            const payload = (queryData as any)[0].attributes as IGame;
            setProvidedGameData({
                ...payload,
                price: ethers.utils.formatUnits(payload.price, 6),
                address: cartridgeAddress,
            });

            handleState(GameState.LOADED);
        }
    }, [cartridgeAddress, queryData]);

    return (
        <GameContext.Provider
            value={{
                data: providedGameData,
                isLoading: isLoading,
            }}
        >
            {children}
        </GameContext.Provider>
    );
};

const GameContext = React.createContext({
    data: emptyGame,
    isLoading: true,
});

export const useGame = () => {
    return React.useContext(GameContext);
};
