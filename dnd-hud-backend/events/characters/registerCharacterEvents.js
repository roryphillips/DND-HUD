const registerAddCharacter = require('./addCharacter');
const registerRemoveCharacter = require('./removeCharacter');
const registerDamageCharacter = require('./damageCharacter');
const registerHealCharacter = require('./healCharacter');
const registerAddCharacterCondition = require('./addCondition');
const registerRemoveCharacterCondition = require ('./removeCondition');

module.exports = (socket, store) => {
    socket.emit('syncCharacters', store.getState().characters);
    registerAddCharacter(socket, store);
    registerRemoveCharacter(socket, store);
    registerDamageCharacter(socket, store);
    registerHealCharacter(socket, store);
    registerAddCharacterCondition(socket, store);
    registerRemoveCharacterCondition(socket, store);
};