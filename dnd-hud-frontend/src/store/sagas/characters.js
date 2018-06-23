import uuid from 'uuid/v4';

import {addCharacter} from "../actions/character";

export function socketAddCharacters(socket, character) {
    return (dispatch) => {
        socket.emit('addCharacter', {id: uuid(), character});
    }
}