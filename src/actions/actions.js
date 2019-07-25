import { GET_GAMES } from '../actionTypes/index';
export function fetchGames() {
    return async dispatch => {
        const response  = await fetch('http://127.0.0.1:5000/api/games');
        const games = await response.json();
        dispatch(getGames(games));
    }
}

export function getGames(games) {
    return {
        type: GET_GAMES,
        games
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

export function createGame(data) {
    return async dispatch => {
        const games = await fetch('http://127.0.0.1:5000/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        // console.log("games", games);
        
        handleResponse(games);
    }
}
