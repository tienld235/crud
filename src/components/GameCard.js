import React from 'react';

const GameCard = (game) => {
    console.log("game ne", game);
    return (
        <div className="ui card">
            <div className="image">
                <img src={game.cover} alt={'Game Cover'} />
            </div>
            <div className="content">
                <div className="header" >{game.title}</div>
            </div>
        </div>
    )
}
export default GameCard;