module.exports = (socket, store) => {
    socket.on('advanceInitiative', (data) => {
        const state = store.getState();
        const initiative = state.initiative;

        if (!initiative) {
            return;
        }

        console.log(initiative.initiativeOrder);

        const lowestInitiativeScore = initiative.initiativeOrder
            .reduce((prev, item) => item.score < prev ? item.score : prev, 100);

        const highestInitiativeScore = initiative.initiativeOrder
            .reduce((prev, item) => item.score > prev ? item.score : prev, 0);

        const nextTurn = initiative.currentTurn === lowestInitiativeScore ?
            highestInitiativeScore :
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