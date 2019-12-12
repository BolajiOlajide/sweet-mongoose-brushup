const { Character } = require('../models');

function saveCharacter(character) {
  const c = new Character(character);
  return c.save();
};

module.exports = saveCharacter;
