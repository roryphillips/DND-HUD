module.exports = (socket, store) => {
    socket.on('advanceInitiative', (data) => {
        const state = store.getState();
        const initiative = state.initiative;

        if (!initiative) {
            return;
        }

        const nextTurn = initiative.currentTurn <= 0 ?
            initiative.initiativeOrder
                .reduce((prev, item) => item.score < prev ? item.score : prev, 100) :
            initiative.initiativeOrder
                .filter(item => item.score <= initiative.currentTurn)
                .reduce((prev, item) => item.score < prev ? item.score : prev, 100);

        const updatedInitiative = {
            ...state.initiative,
            currentTurn: nextTurn
        };

        store.setState({
            ...state,
            initiative: updatedInitiative
        });

        socket.broadcast.emit('syncInitiative', updatedInitiative);
    });
};