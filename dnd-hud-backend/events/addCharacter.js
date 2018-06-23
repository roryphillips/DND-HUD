module.exports = (socket, store) => {
    socket.on('addCharacter', (data) => {
        const character = {
            type: data.type,
            name: data.name,
            level: data.level,
            classText: data.classText,
            currentHealth: data.currentHealth,
            maximumHealth: data.maximumHealth,
            race: data.race,
            gender: data.gender,
            alignment: data.alignment,
            faction: data.faction
        };
        store = [...store, character];
        socket.broadcast.emit('characterAdded', character);
    });
};
