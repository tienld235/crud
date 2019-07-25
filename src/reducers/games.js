import { GET_GAMES } from "../actionTypes";

export default function games(state = [], action = {}){
    switch(action.type){
        case GET_GAMES:
            return action.games;
        default: return state;
    }
}