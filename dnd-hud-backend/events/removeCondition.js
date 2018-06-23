module.exports = (socket, store) => {
    socket.on('removeCharacterCondition', (data) => {
        const character = store[data.id];

        store = {
            ...store,
            [data.id]: {
                ...character,
                conditions: character.conditions.filter(text => text === data.condition)
            }
        };

        socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
    });
};