const inquirer = require("inquirer");
const { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, addRole, addEmployee } = require("./helpers/queries");

function managementOptions() {
    const options = [{
        type: "list",
        message: "What would you like to do?",
        choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
        name: "managementAction"
    }];

    inquirer.prompt(options).then(handleOption);
}

const addDepartmentQuestion = [{
    type: "input",
    message: "What is the name of the department?",
    name: "newDepartment"
}];

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

function handleOption(option) {
    switch (option.managementAction) {
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
            console.log("not implemented yet");
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
        case "Quit":
            process.exit(0); // Exit the program
    }
}

managementOptions();