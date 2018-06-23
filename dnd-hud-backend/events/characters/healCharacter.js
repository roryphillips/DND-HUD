module.exports = (socket, store) => {
    socket.on('healCharacter', (data) => {
        if (data.healing) {
            const character = store[data.id];
            const maximumHealth = character.maximumHealth;
            const newHealth = character.currentHealth + data.healing;

            store = {
                ...store,
                [data.id]: {
                    ...store[data.id],
                    currentHealth: newHealth > maximumHealth ? maximumHealth : newHealth
                }
            };
            socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
        }
    });
};