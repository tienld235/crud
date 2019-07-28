import React from 'react';
import GameCard from './GameCard';

const GamesList = ({games, deleteGame}) => {
    const emptyMessage = <p>There are no games yet in your collection</p>;

    const gamesList = 
        <div className="ui four cards">
            {games.map((game) => <GameCard game={game} key={game._id} deleteGame={deleteGame}/>)}
        </div>
    

    return (
        <div>
            {games.length === 0 ? emptyMessage : gamesList}
        </div>
    )
}
export default GamesList;