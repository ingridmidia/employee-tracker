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
    return db.promise().query("SELECT * FROM employee")
        .then(function (results) {
            console.table(results[0]);
        });
}

function viewAllRoles() {
    return db.promise().query("SELECT * FROM role")
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

module.exports = { viewAllEmployees, viewAllRoles, viewAllDepartments, addDepartment, addRole, addEmployee };