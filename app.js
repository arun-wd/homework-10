const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
​
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
​
const render = require("./lib/htmlRenderer");
​
​const teamMember = [];
const idArray = [];

function appMenu() {

    function createManager() {
        console.log("Time to build your team");
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is your manager's name?",
            },
            {
                type: "input",
                name: "managerId",
                message: "What is your manager's Id?",
            },
            {
                type: "input",
                name: "managerEmail",
                message: "What is your manager's email?",
            },
            {
                type: "input",
                name: "managerOfficeNumber",
                message: "What is your manager's office number?",
            }
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMember.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    }

    function createTeam() {

        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "Which type of team member would you like to add?"
                choices: ["Engineer", "Intern", "No additional team members"]
            }
        ]).then(userChoice => {
            switch(userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    buildTeam();
            }
        });
    }





}