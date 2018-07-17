export const TOGGLE_DM_MODE = 'TOGGLE_DM_MODE';
export const SELECT_CHARACTER = 'SELECT_CHARACTER';

export function toggleDMMode() {
    return {
        type: TOGGLE_DM_MODE
    };
}

export function selectCharacter(id) {
    return {
        type: SELECT_CHARACTER,
        id
    };
}