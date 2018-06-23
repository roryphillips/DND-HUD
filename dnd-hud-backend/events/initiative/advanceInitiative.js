module.exports = (socket, store) => {
    socket.on('advanceInitiative', (data) => {
        const state = store.getState();
        const nextTurn = store.currentTurn + 1;

        store.setState({
            ...state,
            initiative: {
                ...state.initiative,
                currentTurn: nextTurn >= store.entries.length ? 0 : nextTurn
            }
        });

        socket.broadcast.emit('turnUpdated', {currentTurn: store.currentTurn});
    });
};