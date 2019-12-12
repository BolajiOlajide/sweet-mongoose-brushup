const { saveCharacter } = require('./services');

// save a characters
const character1 = saveCharacter({
  name: 'Ryu',
  ultimate: 'Shinku Hadoken'
});

const character2 = saveCharacter({
  name: 'Ken',
  ultimate: 'Guren Enjinkyaku'
})

Promise.all([character1, character2])
  .then(console.log)
  .catch(console.error)
  .finally(() => process.exit(0))
