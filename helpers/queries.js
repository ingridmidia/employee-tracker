const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host: "127.0.0.1",
        user: "root",
        password: "root",
        database: "employee_tracker_db"
    }
);

function viewAllEmployees() {
    return db.promise().query(`SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.name AS department_name, CONCAT(manager.first_name, " ", manager.last_name) AS manager_name FROM employee JOIN role ON employee.role_id = role.id JOIN department ON department.id = role.department_id LEFT JOIN employee AS manager ON employee.manager_id = manager.id`)
        .then(function (results) {
            console.table(results[0]);
        });
}

function viewAllRoles() {
    return db.promise().query("SELECT role.id, role.title, role.salary, department.name AS department_name FROM role JOIN department ON role.department_id = department.id")
        .then(function (results) {
            console.table(results[0]);
        });
}

function viewAllDepartments() {
    return db.promise().query("SELECT * FROM department")
        .then(function (results) {
            console.table(results[0]);
        });
}

function addDepartment(newDepartment) {
    return db.promise().query("INSERT INTO department (name) VALUES (?)", newDepartment);
}

function addRole(newRole, salary, departmentId) {
    return db.promise().query("INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)", [newRole, salary, departmentId]);
}

function addEmployee(firstName, lastName, roleId, managerId) {
    return db.promise().query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [firstName, lastName, roleId, managerId]);
}

function updateEmployeeRole(employeeId, roleId) {
    return db.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
}

module.exports = { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, addRole, addEmployee, updateEmployeeRole };