const fs = require('fs/promises');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    name: 'title',
    type: 'input',
    message: 'Project Name: ',
    default: path.basename(process.cwd())
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
        value: {
            short: 'MIT',
            long: 'MIT License'
        }
    }, {
        name: 'GNU GPLv3',
        value: {
            short: 'GPLv3',
            long: 'GNU GPLv3'
        }
    }, {
        name: 'Apache License 2.0',
        value: {
            short: 'Apache v2',
            long: 'Apache License 2.0'
        }
    }, {
        name: 'Mozilla Public License 2.0',
        value: {
            short: 'Mozilla v2',
            long: 'Mozilla Public License 2.0'
        }
    }, {
        name: 'No license',
        value: null
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

let outPath = './README.md';
const outPathOverride = process.argv[2];
if (outPathOverride) {
    outPath = outPathOverride;
}

inquirer.prompt(questions)
.then(answers => {
    return fs.writeFile(outPath, generateMarkdown(answers));
})
.catch(err => {
    console.error(err);
    process.exit(1);
})