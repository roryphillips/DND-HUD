const registerAddCharacter = require('./addCharacter');
const registerRemoveCharacter = require('./removeCharacter');
const registerDamageCharacter = require('./damageCharacter');
const registerHealCharacter = require('./healCharacter');
const registerShowHideCharacter = require('./showHideCharacters');

module.exports = (socket, store) => {
    socket.emit('syncCharacters', store.getState().characters);
    registerAddCharacter(socket, store);
    registerRemoveCharacter(socket, store);
    registerDamageCharacter(socket, store);
    registerHealCharacter(socket, store);
    registerShowHideCharacter(socket, store);
};