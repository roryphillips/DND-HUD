import {ADD_CHARACTER} from "../actions/character";

export default function characters(state = {}, action) {
    switch (action.type) {
        case ADD_CHARACTER:
            console.log(`New Character. id: ${action.id}`);
            console.log(action.character);
            return {
                ...state,
                [action.id]: action.character
            };

        default:
            return state;
    }
}