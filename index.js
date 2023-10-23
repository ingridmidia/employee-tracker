const inquirer = require("inquirer");
const { viewAllEmployees, viewAllRoles, viewAllDepartments } = require("./helpers/queries");

function managementOptions() {
    const options = [{
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
        name: "managementAction"
    }];

    inquirer.prompt(options).then(handleOption);
}

function handleOption(option) {
    switch (option.managementAction) {
        case "View All Employees":
            viewAllEmployees().then(function () {
                managementOptions();
            });
            break;
        case "Add Employee":
            console.log("not implemented yet");
            break;
        case "Update Employee Role":
            console.log("not implemented yet");
            break;
        case "View All Roles":
            viewAllRoles().then(function () {
                managementOptions();
            });
            break;
        case "Add Role":
            console.log("not implemented yet");
            break;
        case "View All Departments":
            viewAllDepartments().then(function () {
                managementOptions();
            });
            break;
        case "Add Department":
            console.log("not implemented yet");
            break;
        case "Quit":
            process.exit(0); // Exit the program
    }
}

managementOptions();

