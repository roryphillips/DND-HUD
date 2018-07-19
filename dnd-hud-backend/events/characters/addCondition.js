module.exports = (socket, store) => {
    socket.on('addCharacterCondition', (data) => {
        console.log('Add Character Condition Event');
        if (data.condition) {
            const state = store.getState();
            const character = state.characters[data.id];

            store.setState({
                ...state,
                characters: {
                    [data.id]: {
                        ...character,
                        conditions: [
                            ...character.conditions,
                            data.condition
                        ]
                    }
                }
            });

            socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
        }
    });
};
