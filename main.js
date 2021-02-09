const inquirer = require ("inquirer");
const fs = require ("fs");
const Engineer = require ("./library/Engineer");
const Manager = require ("./library/Manager");
const Intern = require ("./library/Intern");

function initApp() {
    startHtml();
    addMember();
}

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

    .then(function({name, position, email, id}) {
        let positionInfo = "";
        if (position === "Engineer") {
            positionInfo = "GitHub User Name";
        } else if (position === "Intern") {
            positionInfo = "School Name"; 
        } else {
            positionInfo = "Office Phone Number";
        }

        inquirer.prompt([{
            message: 'Enter members ${positionInfo}',
            name: "positionInfo",
        },
        {
            type: "list",
            message: "Are there anymore team members to be added?",
            choices: [
                "yes",
                "no",
            ],
            name: "additionalMembers"
        
        }])
        
    })

}
// HTML template
function combineModules(Naruto){
    console.log(employees)
    writeToFile("./Assest/index.html",
    '<!DOCTYPE html>
    <html lang = "en-us">

    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Team Generator </title>
    </head>
</html> 

}

initApp();