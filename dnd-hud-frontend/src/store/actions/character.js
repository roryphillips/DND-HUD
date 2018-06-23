export const ADD_CHARACTER = 'ADD_CHARACTER';

export function addCharacter(id, character) {
    return {
        type: ADD_CHARACTER,
        id,
        character
    };
}
