const uuid = require('uuid/v4');
module.exports = (socket, store) => {
    socket.on('addCharacter', (data) => {
        if (data.id) {
            const character = {
                type: data.type || 'Unknown',
                name: data.name || 'Unknown',
                level: data.level || 0,
                classText: data.classText || 'Unknown',
                currentHealth: data.currentHealth || 0,
                maximumHealth: data.maximumHealth || 0,
                race: data.race || 'Unknown',
                gender: data.gender || 'Unknown',
                alignment: data.alignment || 'Unknown',
                faction: data.faction || 'Unknown',
                conditions: data.conditions || []
            };
            store = {
                ...store,
                [data.id]: character
            };
            socket.broadcast.emit('characterAdded', {id: data.id, character});
        }
    });
};
