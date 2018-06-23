export const ADD_CHARACTER = 'ADD_CHARACTER';
export const SYNC_CHARACTERS = 'SYNC_CHARACTER';

export function addCharacter(id, character) {
    return {
        type: ADD_CHARACTER,
        id,
        character
    };
}

export function syncCharacters(characters) {
    return {
        type: SYNC_CHARACTERS,
        characters
    }
}
