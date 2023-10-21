const inquirer = require("inquirer");

const managementOptions = [{
    type: "list",
    message: "What would you like to do?",
    choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
    name: "managementAction"
}];

inquirer
.prompt(managementOptions)
.then()