import {ADD_CHARACTER, SYNC_CHARACTERS} from "../actions/character";

export default function characters(state = {}, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return {
                ...state,
                [action.id]: action.character
            };

        case SYNC_CHARACTERS:
            return {
                ...action.characters
            };

        default:
            return state;
    }
}