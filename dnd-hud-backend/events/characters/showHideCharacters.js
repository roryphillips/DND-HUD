module.exports = (socket, store) => {
    socket.on('showHideCharacters', (data) => {
        console.log('Show Hide Characters Event');
        for (const id of data.ids) {
            const state = store.getState();
            const character = state.characters[id];
            if (!character) {
                socket.broadcast.emit('syncCharacters', store.getState().characters);
            }

            const newCharacter = {
                ...character,
                isVisible: data.isVisible
            };

            store.setState({
                ...state,
                characters: {
                    ...state.characters,
                    [id]: newCharacter
                }
            });

            socket.broadcast.emit('characterUpdated', {id, character: newCharacter});
        }
    });
};