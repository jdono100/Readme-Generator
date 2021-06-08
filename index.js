// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');

// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: chalk.red("What's the title of your project?"),
        name: 'title',
        default: 'Project-Title'
    },
    {
        type: 'input',
        message: chalk.red('Enter a description for the app'),
        name: 'description',
        default: 'Project description'
    },
    {
        type: 'input',
        message: chalk.blue('Enter your github username (no @ necessary).'),
        name: 'gituser',
        default: 'jaredonovan'
    },
    {
        type: 'input',
        message: chalk.blue('Enter your email address.'),
        name: 'email',
        default: 'jdono100@gmail.com'
    },
    {
        type: 'input',
        message: chalk.red('Enter the steps for installing the app.'),
        name: 'installation',
        default: 'Instructions for installing the app'
    },
    {
        type: 'input',
        message: chalk.red('Explain how to use the app and its real-world usefulness.'),
        name: 'usage',
        default: 'How to use the project and explanation for its usefulness'
    },
    {
        type: 'input',
        message: chalk.red('Explain procedures for contributing to the project.'),
        name: 'contribution',
        default: 'Guidelines for contributing to the project'
    },
    {
        type: 'input',
        message: chalk.red('Explain how to test the project.'),
        name: 'test',
        default: 'Instructions to test the app'
    },
    {
        type: 'checkbox',
        message: chalk.blue('Choose license(s) to protect the project.'),
        choices: ['MIT', 'Apache 2.0', 'AGPLv3', 'GPLv3', 'LGPLv3', 'Mozilla 2.0'],
        name: 'licenses',
        default: ''
    }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err) : console.log(chalk.greenBright('Generating your README...⌚')))
}

// Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((response) => {
            let projTitle = `${response.title}_README.md`
            let markdown = generate.genRdmeMrkdwn(response)
            writeToFile(projTitle, markdown);
        })
}

// Function call to initialize app
init();
