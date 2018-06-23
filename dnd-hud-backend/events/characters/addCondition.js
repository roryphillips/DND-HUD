module.exports = (socket, store) => {
    socket.on('addCharacterCondition', (data) => {
        const character = store[data.id];

        if (data.condition) {
            store = {
                ...store,
                [data.id]: {
                    ...character,
                    conditions: [
                        ...character.conditions,
                        data.condition
                    ]
                }
            };

            socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
        }
    });
};
