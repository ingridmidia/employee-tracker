const inquirer = require("inquirer");
const { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, addRole, addEmployee, updateEmployeeRole } = require("./helpers/queries");

// initializes program showing all options to manage the company
function managementOptions() {
    const options = [{
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Departments", "Add Department", "View All Roles", "Add Role", "View All Employees", "Add Employee", "Update Employee Role", "Quit"],
        name: "managementAction"
    }];

    inquirer.prompt(options).then(handleOption);
}

// question used when user is prompt to add a new department
const addDepartmentQuestion = [{
    type: "input",
    message: "What is the name of the department?",
    name: "newDepartment"
}];

// questions used when user is prompt to add a new role
const addRoleQuestions = [{
    type: "input",
    message: "What is the name of the role?",
    name: "newRole"
},
{
    type: "input",
    message: "What is the salary of the role?",
    name: "salary"
},
{
    type: "input",
    message: "Which department does the role belong to? Please type the department id",
    name: "departmentId"
}];

// questions used when user is prompt to add a new employee
const addEmployeeQuestions = [{
    type: "input",
    message: "What is the employee's first name?",
    name: "firstName"
},
{
    type: "input",
    message: "What is the employee's last name?",
    name: "lastName"
},
{
    type: "input",
    message: "What is the employee's role? Please type the role id",
    name: "roleId"
},
{
    type: "input",
    message: "What is the employee's manager? Please type the employee id",
    name: "managerId"
}];

// question used when user is prompt to uptade a employee role
const updateEmployeeRoleQuestions = [{
    type: "input",
    message: "Which employee's role do you want to update? Please type employee's id",
    name: "employeeId"
},
{
    type: "input",
    message: "Which role do you want to assign the employee? Please type the role id",
    name: "roleId"
}];

function handleOption(option) {
    // handle user choice and call the right function from queries.js
    switch (option.managementAction) {
        case "View All Departments":
            viewAllDepartments().then(function () {
                managementOptions();
            });
            break;
        case "Add Department":
            inquirer
                .prompt(addDepartmentQuestion)
                .then(function (answer) {
                    addDepartment(answer.newDepartment)
                    console.log(`Added ${answer.newDepartment} to the database`);
                })
                .then(function () {
                    managementOptions();
                });
            break;
        case "View All Roles":
            viewAllRoles().then(function () {
                managementOptions();
            });
            break;
        case "Add Role":
            inquirer
                .prompt(addRoleQuestions)
                .then(function (answer) {
                    addRole(answer.newRole, answer.salary, answer.departmentId)
                    console.log(`Added ${answer.newRole} to the database`);
                })
                .then(function () {
                    managementOptions();
                });
            break;
        case "View All Employees":
            viewAllEmployees().then(function () {
                managementOptions();
            });
            break;
        case "Add Employee":
            inquirer
                .prompt(addEmployeeQuestions)
                .then(function (answer) {
                    addEmployee(answer.firstName, answer.lastName, answer.roleId, answer.managerId)
                    console.log(`Added ${answer.firstName} ${answer.lastName} to the database`);
                })
                .then(function () {
                    managementOptions();
                });
            break;
        case "Update Employee Role":
            inquirer
                .prompt(updateEmployeeRoleQuestions)
                .then(function (answer) {
                    updateEmployeeRole(answer.employeeId, answer.roleId)
                    console.log("Update employee's role");
                })
                .then(function () {
                    managementOptions();
                });
            break;
        case "Quit":
            process.exit(0); // Exit the program
    }
}

managementOptions();