const uuid = require('uuid/v4');
module.exports = (socket, store) => {
    socket.on('addCharacter', (data) => {
        const id = uuid();
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
        store = {
            ...store,
            [id]: character
        };
        socket.broadcast.emit('characterAdded', {id, character});
    });
};
