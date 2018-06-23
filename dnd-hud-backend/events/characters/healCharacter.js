module.exports = (socket, store) => {
    socket.on('healCharacter', (data) => {
        if (data.healing) {
            const state = store.getState();
            const character = store[data.id];
            const maximumHealth = character.maximumHealth;
            const newHealth = character.currentHealth + data.healing;

            store.setState({
                ...state,
                characters: {
                    ...state.characters,
                    [data.id]: {
                        ...character,
                        currentHealth: newHealth > maximumHealth ? maximumHealth : newHealth
                    }
                }
            });

            socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
        }
    });
};