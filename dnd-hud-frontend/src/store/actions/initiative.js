export const SET_INITIATIVE = 'SET_INITIATIVE';
export const SYNC_INITIATIVE = 'SYNC_INITIATIVE';
export const ADVANCE_INITIATIVE = 'ADVANCE_INITIATIVE';

export function setInitiative(initiativeOrder) {
    return {
        type: SET_INITIATIVE,
        initiativeOrder
    };
}

export function advanceInitiative() {
    return {
        type: ADVANCE_INITIATIVE
    }
}

export function syncInitiative(currentTurn, initiativeOrder) {
    return {
        type: SYNC_INITIATIVE,
        currentTurn,
        initiativeOrder
    }
}