module.exports = (socket, store) => {
    socket.on('removeCharacterCondition', (data) => {
        if (data.condition) {
            const state = store.getState();
            const character = store[data.id];

            store.setState({
                ...state,
                characters: {
                    ...state.characters,
                    [data.id]: {
                        ...character,
                        conditions: character.conditions.filter(text => text !== data.condition)
                    }
                }
            });

            socket.broadcast.emit('characterUpdated', {id: data.id, character: store[data.id]});
        }
    });
};