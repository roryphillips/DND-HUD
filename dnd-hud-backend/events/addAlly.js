module.exports = (socket, store) => {
    socket.on('addAlly', (data) => {
        const ally = {
            name: data.name,
            level: data.level,
            classText: data.classText,
            currentHealth: data.currentHealth,
            maximumHealth: data.maximumHealth,
            race: data.race,
            gender: data.gender,
            alignment: data.alignment
        };
        store = [...store, ally];
        socket.broadcast.emit('allyAdded', ally);
    });
};
