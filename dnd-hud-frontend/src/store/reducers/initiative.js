import {ADVANCE_INITIATIVE, SET_INITIATIVE, SYNC_INITIATIVE} from "../actions/initiative";

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

        case ADVANCE_INITIATIVE:
            return {
                ...state,
                currentTurn: state.currentTurn === state.initiativeOrder.length -1 ?
                    0 :
                    state.currentTurn + 1
            };

        case SYNC_INITIATIVE:
            return {
                ...state,
                currentTurn: action.currentTurn,
                initiativeOrder: action.initiativeOrder
            };

        default:
            return state;
    }
}