export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DAMAGE_SELECTED_CHARACTERS = 'DAMAGE_SELECTED_CHARACTERS';
export const CHARACTER_UPDATED = 'CHARACTER_UPDATED';
export const SYNC_CHARACTERS = 'SYNC_CHARACTER';

export function characterUpdated(id, character) {
    return {
        type: CHARACTER_UPDATED,
        id,
        character
    }
}

export function addCharacter(id, character) {
    return {
        type: ADD_CHARACTER,
        id,
        character
    };
}

export function damageCharacters(ids, damage) {
    return {
        type: DAMAGE_SELECTED_CHARACTERS,
        ids,
        damage
    }
}

export function syncCharacters(characters) {
    return {
        type: SYNC_CHARACTERS,
        characters
    }
}
