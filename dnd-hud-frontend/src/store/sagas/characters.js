import uuid from 'uuid/v4';

import {addCharacter} from "../actions/character";

export function socketAddCharacters(socket, character) {
    return (dispatch) => {
        const id = uuid();
        socket.emit('addCharacter', {id, character});
        dispatch(addCharacter(id, character));
    }
}