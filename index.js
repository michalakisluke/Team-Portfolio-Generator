const inquirer = require("inquirer");
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const managerHTML = require('./lib/managerGenHTML');
const engineerHTML = require('./lib/engineerGenHTML');
const internHTML = require('./lib/internGenHTML');
const writeFile = require('./utils/writeFile');
const team = [];

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
        team.push(manager);
        displayMenu(); 
    });
}

function createTeam(response) {
    switch(response.menu) {
        case "Add an engineer":
            engineerPrompt();
            break;
        case "Add an intern":
            internPrompt();
            break;
        case "Complete my team":
            //console.log(team);
            // I think this should be the function to write the file, right? Then the call would be that function with an argument of the generateHTML() function.
            console.log(generateHTML());
            writeFile(generateHTML());
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
        createTeam(response);
    })
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
        team.push(engineer);
        displayMenu();
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
        team.push(intern);
        displayMenu();
    });
}

function generateHTML() {
    return  `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="../src/style.css" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Team Portfolio</title>
    </head>
    <body>
        <header>
            <h1 id = page-title>My Team</h1>
        </header>
        <div class = container>
            <div class = row>
                <div class = "team-members col-12">
                    ${employeeHTML()}
                </div>
            </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>
    `
}

function employeeHTML() {
    team.forEach(employee => {
        if (employee.getRole() === "Manager") {
            console.log(managerHTML(employee));
            return managerHTML(employee);
        }
        if (employee.getRole() === "Student") {
            console.log(internHTML(employee));
            return internHTML(employee);
        }
        if (employee.getRole() === "Engineer") {
            console.log(engineerHTML(employee));
            return engineerHTML(employee);
        }
    }) 
}

init();