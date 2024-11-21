import React, { useEffect, useState } from "react";
import useGame from "../hooks/useGames";
import { Text } from "@chakra-ui/react";

const GameGrid = () => {
    const {games, error} = useGame();
	return (
		<>
			{error && <Text>{error}</Text>}
			<ul>
				{games.map((games) => (
					<li key={games.id}>{games.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
