const { retrieveCharacter, retrieveCharacters } = require('./services');


(async () => {
  const ryu = await retrieveCharacter('Ryu');
  console.log(ryu);

  const kens = await retrieveCharacters('Ken');
  console.log(kens);

  process.exit(0);
})();