var { natur } = require('../02/ES5/ES5');
var inquirer = require('inquirer');
const readline = require('readline');

var questions = [
  {
    type: 'input',
    name: 'name',
    message: 'What is your name?',
    default: 'Serhio'
  },
  {
    type: 'confirm',
    name: 'married',
    message: 'Are you merried?'
  },
  { when: function (response) {
      return response.married;
    },
    type: 'input',
    name: 'kids',
    message: 'Number of kids?'
  }
];

// inquirer.prompt(questions, (answer) => {
//   console.log(answer);
// });

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is an array length? ', (answer) => {
  //var arg = process.argv[2];
  // TODO: Log the answer in a database
  console.log(natur(answer));

  rl.close();
});

