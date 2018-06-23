import {ADD_CHARACTER} from "../actions/character";

export default function characters(state = {}, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                [action.id]: action.character
            };

        default:
            return state;
    }
}