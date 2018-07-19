const uuid = require('uuid/v4');
module.exports = (socket, store) => {
    socket.on('addCharacter', (data) => {
        console.log('Add Character Event');
        if (data.id) {
            const state = store.getState();
            const inputCharacter = data.character;
            const character = {
                type: inputCharacter.type || 'Unknown',
                name: inputCharacter.name || 'Unknown',
                level: inputCharacter.level || 0,
                classText: inputCharacter.classText || 'Unknown',
                currentHealth: inputCharacter.currentHealth || 0,
                maximumHealth: inputCharacter.maximumHealth || 0,
                race: inputCharacter.race || 'Unknown',
                gender: inputCharacter.gender || 'Unknown',
                alignment: inputCharacter.alignment || 'Unknown',
                faction: inputCharacter.faction || 'Unknown',
                conditions: inputCharacter.conditions || []
            };

            store.setState({
                ...state,
                characters: {
                    ...state.characters || {},
                    [data.id]: character
                }
            });

            socket.broadcast.emit('characterAdded', {id: data.id, character});
        }
    });
};
