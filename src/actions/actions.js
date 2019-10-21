import { GET_GAMES, CREATE_GAME, GET_GAME, UPDATE_GAME, DELETE_GAME} from '../actionTypes/index';

const handleResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export const fetchGames = () => (
    async dispatch => {
        const response  = await fetch('http://127.0.0.1:5000/api/games');
        const games = await response.json();
        dispatch({
            type: GET_GAMES,
            games
        });
    }
)

export const fetchGame = (id) => (
    async dispatch => {
        const response  = await fetch(`http://127.0.0.1:5000/api/games/${id}`);
        const game = await response.json();
        dispatch({
            type : GET_GAME,
            game
        });
    }
)

export const saveGame = (data) => (
    async dispatch => {
        const game = await fetch('http://127.0.0.1:5000/api/games', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }); 
        handleResponse(game);
        await dispatch({
            type: CREATE_GAME,
            game
        });
    }
)

export const updateGame = (data) => (
    async dispatch => {
        const game = await fetch(`http://127.0.0.1:5000/api/games/${data._id}`, {
            method: 'put',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(game);
        await dispatch({
            type: UPDATE_GAME,
            game
        });
    }
)

export const deleteGame = (id) => (
    async dispatch => {
        const game = await fetch(`http://127.0.0.1:5000/api/games/${id}`, {
            method: 'delete',
            headers: {
                "Content-Type": "application/json"
            }
        });
        handleResponse(game);
        await dispatch({
            type : DELETE_GAME,
            id
        });
    }
)
