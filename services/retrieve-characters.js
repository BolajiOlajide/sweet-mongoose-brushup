const { Character } = require('../models');


module.exports = function(name) {
  return Character.find({ name })
}
