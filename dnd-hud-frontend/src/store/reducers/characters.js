import {
    ADD_CHARACTER,
    CHARACTER_UPDATED,
    DAMAGE_SELECTED_CHARACTERS,
    HEAL_SELECTED_CHARACTERS, SHOW_HIDE_CHARACTERS,
    SYNC_CHARACTERS
} from "../actions/character";

export default function characters(state = {}, action) {
    switch (action.type) {
        case CHARACTER_UPDATED:
        case ADD_CHARACTER:
            return {
                ...state,
                [action.id]: action.character
            };

        case DAMAGE_SELECTED_CHARACTERS:
            const damagedCharacters = action.ids.reduce((result, id) => {
                const character = state[id];
                if (!character) return result;

                const newHealth = character.currentHealth - action.damage;
                result[id] = {
                    ...character,
                    currentHealth: newHealth > 0 ? newHealth : 0
                };
                return result;
            }, {});

            return {
                ...state,
                ...damagedCharacters
            };

        case HEAL_SELECTED_CHARACTERS:
            const healedCharacters = action.ids.reduce((result, id) => {
                const character = state[id];
                if (!character) return result;

                const newHealth = character.currentHealth + action.damage;
                result[id] = {
                    ...character,
                    currentHealth: newHealth > character.maximumHealth ? character.maximumHealth : newHealth
                };
                return result;
            }, {});

            return {
                ...state,
                ...healedCharacters
            };

        case SHOW_HIDE_CHARACTERS:
            const showHideCharacters = action.ids.reduce((result, id) => {
                const character = state[id];
                if (!character) return result;

                result[id] = {
                    ...character,
                    isVisible: action.visibility
                };

                return result;
            }, {});

            return {
                ...state,
                ...showHideCharacters
            };

        case SYNC_CHARACTERS:
            return {
                ...action.characters
            };

        default:
            return state;
    }
}