const registerCharacterEvents = require('./characters/registerCharacterEvents');
const registerInitiativeEvents = require('./initiative/registerInitativeEvents');

module.exports = (socket, store) => {
    console.log(`New Connection: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`Disconnected: ${socket.id}`);
    });
    registerCharacterEvents(socket, store);
    registerInitiativeEvents(socket, store);
};