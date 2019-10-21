import React from 'react';
import {Link} from 'react-router-dom';

const GameCard = ({game, deleteGame}) => (
    <div className="ui card">
        <div className="image">
            <img src={game.cover} alt={'Game Cover'} />
        </div>
        <div className="content">
            <div className="header" >{game.title}</div>
        </div>
        <div className="extra content">
            <div className="ui two buttons">
                <Link to={`/game/${game._id}`} className="ui basic button green">Edit</Link>
                <Link className="ui basic button red" onClick={()=> deleteGame(game._id)}>Delete</Link>
            </div>
        </div>
    </div>
)

export default GameCard;