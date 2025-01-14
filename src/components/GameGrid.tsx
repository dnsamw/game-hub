import { SimpleGrid, Text } from '@chakra-ui/react';
import { useGames } from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeletonn from './GameCardSkeletonn';
import GameCardContainer from './GameCardContainer';
import { Genre } from '../hooks/useGenres';
import { Platform } from '../hooks/usePlatforms';
import { GameQuery } from '../App';

type Props = {
  gameQuery: GameQuery
}


function GameGrid({gameQuery}: Props) {

 const {data,error, isLoading} = useGames(gameQuery)
 const skeletons = [1,2,3,4,5,6]

  return (
    <>
    {error && <Text>{error}</Text>}
    <SimpleGrid columns={{sm:1, md:2, lg:3, xl:5 }} spacing={3} padding="10px" >
        {isLoading && skeletons.map(skeleton=> <GameCardContainer key={skeleton}><GameCardSkeletonn /></GameCardContainer>)}
        {data.map(game=>
        <GameCardContainer key={game.id}>
            <GameCard game={game} />
        </GameCardContainer>
        )}
    </SimpleGrid>
    </>
  )
}

export default GameGrid