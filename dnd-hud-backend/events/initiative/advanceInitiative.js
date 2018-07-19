module.exports = (socket, store) => {
    socket.on('advanceInitiative', (data) => {
        const state = store.getState();
        const initiative = state.initiative;

        if (!initiative) {
            return;
        }

        const nextTurn = initiative.currentTurn === initiative.initiativeOrder.length -1 ?
            0 :
            initiative.currentTurn + 1;

        const updatedInitiative = {
            ...initiative,
            currentTurn: nextTurn
        };

        store.setState({
            ...state,
            initiative: updatedInitiative
        });

        socket.broadcast.emit('syncInitiative', updatedInitiative);
    });
};