import React from 'react';
import { connect } from 'react-redux';
import GamesList from '../components/GamesList';
import { fetchGames, deleteGame } from '../actions/actions';

class GamesPage extends React.Component {
    componentWillMount = () => {
        this.props.fetchGames();
    }

    render= () => (
            <div>
                <h1>Game List</h1>
                <GamesList games={this.props.games} deleteGame={this.props.deleteGame} />
            </div>
    )
}

const mapStateToProps = (state) => ({
    games: state.games
});

const mapDispatchToProps = dispatch => ({
    fetchGames: () => dispatch(fetchGames()),
    deleteGame: (id) => dispatch(deleteGame(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(GamesPage);