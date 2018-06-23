module.exports = (socket, store) => {
    socket.on('removeCharacter', (data) => {
        if (data.id) {
            let newStore = {};

            for (const key of Object.keys(store)) {
                if (key !== data.id) {
                    newStore[key] = store[key];
                }
            }


            store = Object.keys(store).reduce((prev, key) => {
                if (key !== data.id) prev[key] = store[key];
            }, {});

            socket.broadcast.emit('characterRemoved', {id: data.id, characters: store});
        }
    });
};