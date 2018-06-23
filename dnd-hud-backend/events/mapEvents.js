const registerCharacterEvents = require('./characters/registerCharacterEvents');
const registerInitiativeEvents = require('./initiative/registerInitativeEvents');

module.exports = (socket, store) => {
    console.log(`New Connection: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`Disconnected: ${socket.id}`);
    });

    socket.emit('welcome', {message: 'Hello from the server side'});

    socket.on('welcome-ack', (data) => {
        console.log(JSON.stringify(data));
    });

    registerCharacterEvents(socket, store);
    registerInitiativeEvents(socket, store);
};