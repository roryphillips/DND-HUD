export const CHARACTER_UPDATED = 'CHARACTER_UPDATED';
export const ADD_CHARACTER = 'ADD_CHARACTER';
export const DAMAGE_SELECTED_CHARACTERS = 'DAMAGE_SELECTED_CHARACTERS';
export const HEAL_SELECTED_CHARACTERS = 'HEAL_SELECTED_CHARACTERS';
export const SHOW_HIDE_CHARACTERS = 'SHOW_HIDE_CHARACTERS';
export const SYNC_CHARACTERS = 'SYNC_CHARACTER';

export function characterUpdated(id, character) {
    return {
        type: CHARACTER_UPDATED,
        id,
        character
    };
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
    };
}

export function healCharacters(ids, damage) {
    return {
        type: HEAL_SELECTED_CHARACTERS,
        ids,
        damage
    };
}

export function showHideCharacters(ids, visibility) {
    return {
        type: SHOW_HIDE_CHARACTERS,
        ids,
        visibility
    };
}

export function syncCharacters(characters) {
    return {
        type: SYNC_CHARACTERS,
        characters
    };
}
