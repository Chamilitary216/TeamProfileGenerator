const inquirer = require ("inquirer");
const fs = require ("fs");
const Engineer = require ("./library/Engineer");
const Manager = require ("./library/Manager");
const Intern = require ("./library/Intern");

function addMember () {
    inquirer.prompt([{

        type: "input",
        message: "Please enter team memebers name",
        name: "name",
    },
    {
        type: "list",
        message: "What is thier company role?",
        name: "role",
        choices: [
            "Engineer",
            "Manager",
            "Intern",
        ],
        name: "position"
    },    

    {
        type: "input",
        message: "What is their e-mail address?",
        name: "email",
        
    },

    {
        type: "input",
        message: "What is their ID number??",
        name: "id",
    }])

}