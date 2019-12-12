const { Character } = require('../models');


function clearCharacters() {
  return Character.deleteMany({})
}

module.exports = clearCharacters;
