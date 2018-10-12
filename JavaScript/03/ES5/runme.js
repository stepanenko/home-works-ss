var { natur, tris, square } = require('./ES5');
const readline = require('readline');
const util = require('util');

const rl = readline.createInterface(process.stdin, process.stdout);

rl.question('What is an array length? ', (answer) => {

  rl.setPrompt('What function you wanna use (natur/square/tris): ');
  rl.prompt();

  rl.on('line', (func) => {
    if (func === 'natur') {
      util.log(natur(answer));
      rl.close();
    } 
    else if (func === 'square') {
      util.log(square(answer));
      rl.close();
    } 
    else if (func === 'tris') {
      util.log(tris(answer));
      rl.close();
    } 
    else {
      util.log('Sorry, no such function');
      rl.close();
    }
  });
});

