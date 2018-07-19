import {SELECT_CHARACTER, TOGGLE_DM_MODE, TOGGLE_FULL_SCREEN} from "../actions/ui";

export default function ui(state = {
    isDM: false,
    selectedCharacters: []
}, action) {
    switch (action.type) {
        case TOGGLE_DM_MODE:
            return {
                ...state,
                isDM: !state.isDM
            };

        case SELECT_CHARACTER:
            return {
                ...state,
                selectedCharacters:
                    state.selectedCharacters.indexOf(action.id) !== -1
                        ? state.selectedCharacters.filter(id => id !== action.id)
                        : [...state.selectedCharacters, action.id]
            };

        default:
            return state;
    }
}