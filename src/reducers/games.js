import { GET_GAMES, CREATE_GAME } from "../actionTypes";

export default function games(state = [], action = {}){
    switch(action.type){
        case CREATE_GAME:
            return [...state, action.game]
        case GET_GAMES:
            return action.games;
        default: return state;
    }
}