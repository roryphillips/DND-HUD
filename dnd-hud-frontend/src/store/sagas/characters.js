import uuid from 'uuid/v4';

import {addCharacter, damageCharacters, healCharacters, showHideCharacters} from "../actions/character";

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

export function socketHealCharacters(socket, healing) {
    return (dispatch, getState) => {
        const ids = getState().ui.selectedCharacters;
        socket.emit('healCharacters', {ids, healing});
        dispatch(healCharacters(ids, healing));
    }
}

export function socketShowHideCharacters(socket, visibility) {
    return (dispatch, getState) => {
        const ids = getState().ui.selectedCharacters;
        socket.emit('showHideCharacters', {ids, isVisible: visibility});
        dispatch(showHideCharacters(ids, visibility));
    }
}