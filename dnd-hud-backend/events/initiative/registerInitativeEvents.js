const registerAdvanceInitiative = require('./advanceInitiative');
const registerSetInitiative = require('./setInitiative');

module.exports = (socket, store) => {
    socket.emit('syncInitiative', store.getState().initiative);
    registerAdvanceInitiative(socket, store);
    registerSetInitiative(socket, store);
};