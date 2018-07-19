export const SET_INITIATIVE = 'SET_INITIATIVE';
export const UPDATE_INITIATIVE = 'UPDATE_INITIATIVE';

export function setInitiative(initiativeOrder) {
    return {
        type: SET_INITIATIVE,
        initiativeOrder
    };
}

export function updateInitiative(currentTurn, initiativeOrder) {
    return {
        type: UPDATE_INITIATIVE,
        currentTurn,
        initiativeOrder
    }
}