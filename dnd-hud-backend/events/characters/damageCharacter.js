module.exports = (socket, store) => {
    socket.on('damageCharacters', (data) => {
        console.log('Damage Characters Event');
        if (data.damage) {
            for (const id of data.ids) {
                const state = store.getState();
                const character = state.characters[id];
                if (!character) {
                    socket.broadcast.emit('syncCharacters', store.getState().characters);
                }
                const newHealth = character.currentHealth - data.damage;
                const newCharacter = {
                    ...character,
                    currentHealth: newHealth <= 0 ? 0 : newHealth
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