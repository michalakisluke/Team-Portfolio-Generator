const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

// start the application
    // inquirer prompt for team manager information
        // create a manager using input from the user


// display menu
    // user selects intern or engineer
        // user gets prompted with questions for intern or engineer
            // createIntern method / createEngineer method
        // Create inter or engineer object using the inputs
        // Push this new object to an output array
    // User selects complete my team
        // take manager object and employee array, generate html based on those objects

function init() {
    // Prompt for team manager info
    inquirer.prompt([
        {
            message: "Please enter the project manager's name",
            name: "name",
            type: "input"
        },
        {
            message: "Please enter the project manager's ID number",
            name: "id",
            type: "input"
        },
        {
            message: "Please enter the project manager's email",
            name: "email",
            type: "input"
        },
        {
            message: "Please enter the project office number",
            name: "office",
            type: "input"
        }
    ]).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
        console.log(manager);
        createTeam(); 
    });
}

function createTeam() {
    const team = [];
    // Display the menu with "new engineer" "new intern" "complete my team" options

    const userSelection = displayMenu();

    switch(userSelection) {
        case "Add an engineer":
            team.push(engineerPrompt());
            createTeam();
        case "Add an intern":
            team.push(internPrompt());
            createTeam();
        case "Complete my team":
            console.log(team);
    }
    return team;
}

function displayMenu() {
    inquirer.prompt([
        {
            message: "Please select a menu item",
            name: "menu",
            type: "list",
            choices: ["Add an engineer", "Add an intern", "Complete my team"]
        }
    ])
    .then(response => {
        console.log(response);
    });
}

function engineerPrompt() {
    inquirer.prompt([
        {
            message: "Please enter the engineer's name",
            name: "name",
            type: "input"
        },
        {
            message: "Please enter the engineer's ID number",
            name: "id",
            type: "input"
        },
        {
            message: "Please enter the engineer's email",
            name: "email",
            type: "input"
        },
        {
            message: "Please enter the engineer's github username",
            name: "github",
            type: "input"
        }
    ]).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        console.log(engineer);
    });
}

function internPrompt() {
    inquirer.prompt([
        {
            message: "Please enter the intern's name",
            name: "name",
            type: "input"
        },
        {
            message: "Please enter the intern's ID number",
            name: "id",
            type: "input"
        },
        {
            message: "Please enter the intern's email",
            name: "email",
            type: "input"
        },
        {
            message: "Please enter the intern's school",
            name: "school",
            type: "input"
        }
    ])
    .then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        console.log(intern);
    });
}

init();