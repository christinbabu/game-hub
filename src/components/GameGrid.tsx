import React, { useEffect, useState } from "react";
import useGame from "../hooks/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
	const { data, error, isLoading } = useGame();
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<>
			{isLoading &&
				skeletons.map((skeleton) => <GameCardContainer>
					<GameCardSkeleton key={skeleton} />
				</GameCardContainer>
				)}
			{error && <Text>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={3}>
				{data.map((game) => (
					<GameCardContainer>
						<GameCard key={game.id} game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
