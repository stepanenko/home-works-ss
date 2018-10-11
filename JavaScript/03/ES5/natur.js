var { natur } = require('../../02/ES5/ES5');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is an array length? ', (answer) => {
  console.log(natur(answer));

  rl.close();
});

