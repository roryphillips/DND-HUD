module.exports = (socket, store) => {
    socket.on('healCharacters', (data) => {
        if (data.healing) {
            for (const id of data.ids) {
                const state = store.getState();
                const character = store[id];
                const maximumHealth = character.maximumHealth;
                const newHealth = character.currentHealth + data.healing;

                store.setState({
                    ...state,
                    characters: {
                        ...state.characters,
                        [id]: {
                            ...character,
                            currentHealth: newHealth > maximumHealth ? maximumHealth : newHealth
                        }
                    }
                });

                socket.broadcast.emit('characterUpdated', {id: id, character: store.getState()[id]});
            }

        }
    });
};