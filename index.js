const fs = require('fs');
const Manager = require("./lib/Manager")
// const Engineer = require("./lib/Engineer")
// const Intern = require("./lib/Intern")
// const path = require('path');
// const htmlHelpers = require('./src/utils/html');
// const inquirer = require('inquirer');
// const teamArray = [];
// const employee = [];
// let cards;

// initial manager input
createManager()

function createManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name?",
        },
        {
            type: 'input',
            message: 'What is your ID number?',
            name: 'id'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Please enter your office phone number?',
            name: 'officeNumber'
        }
    ]).then(answers => {
        console.log(answers)
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        teamArray.push(manager);
        createEmployee()
    })
}

// adding staff member selection
function createEmployee() {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Who do you want to add to your team?',
            name: 'employeeType',
            choices: ['Add Engineer', 'Add Intern', 'Quit to result'],
        },
    ]).then((data) => {
        // console.log(data);
        switch (data.employeeType) {
            case 'Add Engineer':
                addEngineer();
                break;
            case 'Add Intern':
                addIntern();
                break;
            default:
                buildSouce(teamArray);
        }
    });
}