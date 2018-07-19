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

            const updatedInitiative = {
                currentTurn: 0,
                initiativeOrder: initiativeEntries
            };

            store.setState({
                ...state,
                initiative: updatedInitiative
            });

            socket.broadcast.emit('syncInitiative', updatedInitiative);
        }
    });
};
