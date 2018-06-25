import uuid from 'uuid/v4';

import {addCharacter, damageCharacters} from "../actions/character";

export function socketAddCharacters(socket, character) {
    return (dispatch) => {
        const id = uuid();
        socket.emit('addCharacter', {id, character});
        dispatch(addCharacter(id, character));
    }
}

export function socketDamageCharacters(socket, damage) {
    return (dispatch, getState) => {
        const ids = getState().ui.selectedCharacters;
        socket.emit('damageCharacters', {ids, damage});
        dispatch(damageCharacters(ids, damage));
    }
}