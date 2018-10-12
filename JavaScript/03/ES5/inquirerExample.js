var inquirer = require('inquirer');

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

inquirer.prompt(questions, (answer) => {
  console.log(answer.toString());       // doesnt log an answer
});