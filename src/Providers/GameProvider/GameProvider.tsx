import { gql, useQuery } from "@apollo/client";
import React, { ReactNode } from "react";
import { Game } from "../../Graphql/api";
import { getGame } from "../../Graphql/queries";

export const GameProvider = ({ children }: { children: ReactNode }) => {
	const { data } = useQuery(gql`${getGame}`, { variables: { id: process.env.REACT_APP_CARTRIDGE }});
	return (
		<GameContext.Provider
			value={{
                game: data?.getGame || {}
			}}
		>
			{children}
		</GameContext.Provider>
	);
};

const GameContext = React.createContext({
    game: {} as Game
});

export const useGame = () => {
	const context = React.useContext(GameContext);
	return context;
};
