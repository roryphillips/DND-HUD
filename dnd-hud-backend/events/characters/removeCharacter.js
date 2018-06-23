module.exports = (socket, store) => {
    socket.on('removeCharacter', (data) => {
        if (data.id) {
            const state = store.getState();

            store.setState({
                ...state,
                characters: Object.keys(store.characters).reduce((prev, key) => {
                    if (key !== data.id) prev[key] = state.characters[key];
                    return prev;
                })
            });

            socket.broadcast.emit('characterRemoved', {id: data.id, characters: store});
        }
    });
};