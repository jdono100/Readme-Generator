// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const gen = require('./utils/genMarkdown')

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: chalk.red("What's the title of your project?"),
        name: 'title',
    },
    {
        type: 'input',
        message: chalk.red('Enter a description for the app'),
        name: 'description',
    },
    {
        type: 'input',
        message: chalk.blue('Enter your github username (no @ necessary).'),
        name: 'gituser',
    },
    {
        type: 'input',
        message: chalk.blue('Enter your email address.'),
        name: 'email',
    },
    {
        type: 'input',
        message: chalk.red('Enter the steps for installing the app.'),
        name: 'installation',
    },
    {
        type: 'input',
        message: chalk.red('Explain how to use the app and its real-world usefulness.'),
        name: 'usage',
    },
    {
        type: 'input',
        message: chalk.red('Explain procedures for contributing to the project.'),
        name: 'contribution',
    },
    {
        type: 'input',
        message: chalk.red('Explain how to test the project.'),
        name: 'test',
    },
    {
        type: 'checkbox',
        message: chalk.blue('Choose license(s) to protect the project.'),
        choices: ['MIT', 'Apache 2.0', 'AGPLv3', 'GPLv3', 'Eclipse 1.0', 'Mozilla 2.0'],
        name: 'licenses',
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(chalk.greenBright('Generating your README *^____^*')))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        let projTitle = `${response.title}_README.md`
        let markdown = gen(response)
        writeToFile(projTitle, markdown);
    })
}

// Function call to initialize app
init();