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
            const lowestInitiativeScore = state.initiativeOrder
                .reduce((prev, item) => item.score < prev ? item.score : prev, 100);

            const highestInitiativeScore = state.initiativeOrder
                .reduce((prev, item) => item.score > prev ? item.score : prev, 0);

            return {
                ...state,
                currentTurn: state.currentTurn <= lowestInitiativeScore ?
                    highestInitiativeScore :
                    state.initiativeOrder
                        .filter(item => item.score < state.currentTurn)
                        .reduce((prev, item) => item.score < prev ? item.score : prev, state.currentTurn)
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