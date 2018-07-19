import {SET_INITIATIVE, UPDATE_INITIATIVE} from "../actions/initiative";

export default function initiative(state = {
    currentTurn: 0,
    initiativeOrder: []
}, action) {
    switch (action.type) {
        case SET_INITIATIVE:
            return {
                ...state,
                initiativeOrder: action.initiativeOrder
            };

        case UPDATE_INITIATIVE:
            return {
                ...state,
                currentTurn: action.currentTurn,
                initiativeOrder: action.initiativeOrder
            };

        default:
            return state;
    }
}