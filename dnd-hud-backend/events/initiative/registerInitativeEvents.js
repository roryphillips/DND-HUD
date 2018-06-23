const registerSetInitiative = require('./setInitiative');

module.exports = (socket, store) => {
    registerSetInitiative(socket, store);
};