module.exports = (socket, store) => {
    socket.on('setInitiative', (data) => {
        if (data.initiativeOrder) {
            const state = store.getState();
            const initiativeEntries = data.initiativeOrder.map(entry => {
                return {
                    name: entry.name || 'Unknown',
                    score: entry.score || 0
                }
            }).sort((a, b) => a.score > b.score);

            store.setState({
                ...state,
                initiative: {
                    currentTurn: 0,
                    initiativeOrder: initiativeEntries
                }
            });

            socket.broadcast.emit('initiativeUpdated', initiativeEntries);
        }
    });
};
