module.exports = (socket, store) => {
    console.log('Remove Character Event');

    socket.on('removeCharacter', (data) => {
        if (data.id) {
            const state = store.getState();

            store.setState({
                ...state,
                characters: Object.keys(state.characters).reduce((prev, key) => {
                    if (key !== data.id) prev[key] = state.characters[key];
                    return prev;
                })
            });

            socket.broadcast.emit('characterRemoved', {id: data.id, characters: store});
        }
    });
};