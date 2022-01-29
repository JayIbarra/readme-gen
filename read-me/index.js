const fs = require('fs');
// Include packages needed for this application //
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// const { isBuffer } = require('util'); //

// Create an array of questions for user input //
const questions = () => {

// prompt the user //
    return inquirer
    .prompt([
      {
        type: 'input',
        name: 'questions',
        message: 'What is your username on GitHub?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your repo?'
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contributing guidelines for this project?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'list',
        name: 'license',
        message: "What is the license for you project?",
        choices: ['MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0', 'None']
    }
    ])
};

// Create a function to write README file //
function writeToFile(filename, data) {}

// Create a function to initialize app //
function init() {
    questions()
    .then(answers => {
        console.log("answers: ", answers);
        const mdContent = generateMarkdown(answers);
        fs.writeFile('./README.md', mdContent, err => {
            if (err) {
                console.log(err)
                return; 
            }
    
            console.log('Success!');
        })
    });
}

// Function call to initialize app //
init();