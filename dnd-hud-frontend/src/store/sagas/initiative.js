import {advanceInitiative, setInitiative} from "../actions/initiative";

export function socketSetInitiative(socket, initiativeOrder) {
    return (dispatch, getState) => {
        socket.emit('setInitiative', {initiativeOrder});
        dispatch(setInitiative(initiativeOrder));
    }
}

export function socketAdvanceInitiative(socket) {
    return (dispatch, getState) => {
        socket.emit('advanceInitiative', {});
        dispatch(advanceInitiative());
    }
}