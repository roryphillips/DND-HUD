export const SET_INITIATIVE = 'SET_INITIATIVE';
export const SYNC_INITIATIVE = 'SYNC_INITIATIVE';

export function setInitiative(initiativeOrder) {
    return {
        type: SET_INITIATIVE,
        initiativeOrder
    };
}

export function syncInitiative(currentTurn, initiativeOrder) {
    return {
        type: SYNC_INITIATIVE,
        currentTurn,
        initiativeOrder
    }
}