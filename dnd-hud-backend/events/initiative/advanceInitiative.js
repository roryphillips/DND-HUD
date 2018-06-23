module.exports = (socket, store) => {
    socket.on('advanceInitiative', (data) => {
        const nextTurn = store.currentTurn + 1;

        store = {
            ...store,
            currentTurn: nextTurn >= store.entries.length ? 0 : nextTurn
        };

        socket.broadcast.emit('turnUpdated', {currentTurn: store.currentTurn});
    });
};