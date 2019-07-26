import { GET_GAMES, CREATE_GAME} from '../actionTypes/index';
export function fetchGames() {
    return async dispatch => {
        const response  = await fetch('http://127.0.0.1:5000/api/games');
        const games = await response.json();
        dispatch(getGames(games));
    }
}

export function getGames(game) {
    return {
        type: GET_GAMES,
        game
    }
}

function handleResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function createGame(game){
    return {
        type: CREATE_GAME,
        game
    }
}

export function saveGame(data) {
    return async dispatch => {
        const game = await fetch('http://127.0.0.1:5000/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        // console.log("games", games);
        
        handleResponse(game);
        await dispatch(createGame(game));
    }
}
