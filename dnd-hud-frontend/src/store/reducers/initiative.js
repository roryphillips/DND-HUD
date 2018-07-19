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
                currentTurn: state.currentTurn <= 0 ?
                    state.initiativeOrder
                        .reduce((prev, item) => item.score < prev ? item.score : prev, 100) :
                    state.initiativeOrder
                        .filter(item => item.score < state.currentTurn)
                        .reduce((prev, item) => item.score < prev ? item.score : prev, 100)
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