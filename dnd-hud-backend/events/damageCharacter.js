module.exports = (socket, store) => {
    socket.on('damageCharacter', (data) => {
        const currentHealth = store[data.id].currentHealth - data.damage;

        store = {
            ...store,
            [data.id]: {
                ...store[data.id],
                currentHealth
            }
        };
        socket.broadcast.emit('characterUpdated', {id, character});
    });
};