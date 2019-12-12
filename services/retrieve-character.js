const { Character } = require('../models');


module.exports = function(name) {
  return Character.findOne({ name })
}
