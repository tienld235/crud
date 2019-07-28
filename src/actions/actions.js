import { GET_GAMES, CREATE_GAME, GET_GAME, UPDATE_GAME, DELETE_GAME} from '../actionTypes/index';
export function fetchGames() {
    return async dispatch => {
        const response  = await fetch('http://127.0.0.1:5000/api/games');
        const games = await response.json();
        dispatch(dispatchGetGames(games));
    }
}

export function fetchGame(id) {
    return async dispatch => {
        const response  = await fetch(`http://127.0.0.1:5000/api/games/${id}`);
        const game = await response.json();
        dispatch(dispatchGetGame(game));
    }
}

export function dispatchGetGame(game){
    return {
        type : GET_GAME,
        game
    }
}

export function dispatchGetGames(games) {
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

export function dispatchCreateGame(game){
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
        await dispatch(dispatchCreateGame(game));
    }
}

export function updateGame(data){
    return async dispatch => {
        const game = await fetch(`http://127.0.0.1:5000/api/games/${data._id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(game);
        await dispatch(dispatchUpdateGame(game));
    }
}

export function dispatchUpdateGame(game){
    return {
        type: UPDATE_GAME,
        game
    }
}

export function deleteGame(id){
    return async dispatch => {
        const game = await fetch(`http://127.0.0.1:5000/api/games/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(game);
        await dispatch(dispatchDeleteGame(id));
    }
}

export function dispatchDeleteGame(gameId){
    return {
        type : DELETE_GAME,
        gameId
    }
}
