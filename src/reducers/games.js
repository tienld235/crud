import { GET_GAMES, CREATE_GAME, GET_GAME,  UPDATE_GAME, DELETE_GAME } from "../actionTypes";

export default function games(state = [], action = {}) {
    switch (action.type) {
        case CREATE_GAME:
            return [...state, action.game]
        case GET_GAMES:
            return action.games;
        case GET_GAME:
            const index = state.findIndex(item => item._id = action.game._id);
            if (index > -1) {
                return state.map(item => {
                    if (item._id === action.game._id) return action.game;
                    return item;
                })
            } else {
                return [
                    ...state,
                    action.game
                ]
            }
        case UPDATE_GAME: 
            return state.map(item => {
                if(item._id === action.game._id) return action.game;
                return item;
            })
        case DELETE_GAME:
            return state.filter(item => item._id !== action.gameId)
        default: return state;
    }
}