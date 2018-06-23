module.exports = (socket, store) => {
    socket.on('damageCharacter', (data) => {
        if (data.damage) {
            const state = store.getState();
            const character = state.characters[data.id];
            const newHealth = character.currentHealth - data.damage;

            store.setState({
                ...state,
                characters: {
                    ...state.characters,
                    [data.id]: {
                        ...store[data.id],
                        currentHealth: newHealth <= 0 ? 0 : newHealth
                    }
                }
            });

            socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
        }
    });
};