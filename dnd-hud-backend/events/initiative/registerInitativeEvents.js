const registerAdvanceInitiative = require('./advanceInitiative');
const registerSetInitiative = require('./setInitiative');

module.exports = (socket, store) => {
    registerAdvanceInitiative(socket, store);
    registerSetInitiative(socket, store);
};