const fs = require('fs/promises');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    name: 'title',
    type: 'input',
    message: 'Project Name: ',
    default: function() {
        return path.basename(process.cwd());
    }
}, {
    name: 'description',
    type: 'input',
    message: 'Description: '
}, {
    name: 'installation',
    type: 'input',
    message: 'Installation instructions: '
}, {
    name: 'usage',
    type: 'input',
    message: 'Usage instructions: '
}, {
    name: 'contribution',
    type: 'input',
    message: 'Contribution guidelines: '
}, {
    name: 'tests',
    type: 'input',
    message: 'How to run the tests: '
}, {
    name: 'license',
    type: 'list',
    message: 'License:',
    choices: [{
        name: 'MIT License',
        value: 'MIT'
    }, {
        name: 'GNU GPLv3',
        value: 'GPLv3'
    }, {
        name: 'Apache License 2.0',
        value: 'Apache v2'
    }, {
        name: 'Mozilla Public License 2.0',
        value: 'Mozilla v2'
    }, {
        name: 'No license',
        value: ''
    }]
}, {
    name: 'githubId',
    type: 'input',
    message: 'Your GitHub username: '
}, {
    name: 'email',
    type: 'input',
    message: 'Your email address: '
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();

inquirer.prompt(questions)
.then(answers => {
    console.log(generateMarkdown(answers));
})