const registerAdvanceInitiative = require('./advanceInitiative');
const registerSetInitiative = require('./setInitiative');

module.exports = (socket, store) => {
    if (!!store.getState().initiative) {
        socket.emit('syncInitiative', store.getState().initiative);
    }
    registerAdvanceInitiative(socket, store);
    registerSetInitiative(socket, store);
};