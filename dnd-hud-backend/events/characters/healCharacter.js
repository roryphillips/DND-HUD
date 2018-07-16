module.exports = (socket, store) => {
    socket.on('healCharacters', (data) => {
        console.log('Heal Characters Event');
        if (data.healing) {
            for (const id of data.ids) {
                const state = store.getState();
                const character = state.characters[id];
                if (!character) {
                    socket.broadcast.emit('syncCharacters', store.getState().characters);
                }
                const maximumHealth = character.maximumHealth;
                const newHealth = character.currentHealth + data.healing;
                const newCharacter = {
                    ...character,
                    currentHealth: newHealth > maximumHealth ? maximumHealth : newHealth
                };

                store.setState({
                    ...state,
                    characters: {
                        ...state.characters,
                        [id]: newCharacter
                    }
                });

                socket.broadcast.emit('characterUpdated', {id: id, character: newCharacter});
            }

        }
    });
};