import React from 'react';
import { connect } from 'react-redux';
import GamesList from './components/GamesList';
import { fetchGames } from './actions/actions';

class GamesPage extends React.Component {
    componentWillMount() {
        this.props.fetchGames();
    }

    render() {
        console.log(this.props.games);
        
        return (
            <div>
                <h1>Game List</h1>
                <GamesList games={this.props.games} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        games: state.games
    }
}

export default connect(mapStateToProps, { fetchGames })(GamesPage);