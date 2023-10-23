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
            console.log(results[0]);
        });
}

function viewAllRoles() {
    return db.promise().query("SELECT * FROM role")
        .then(function (results) {
            console.log(results[0]);
        });
}

function viewAllDepartments() {
    return db.promise().query("SELECT * FROM department")
        .then(function (results) {
            console.log(results[0]);
        });
}

module.exports = { viewAllEmployees, viewAllRoles, viewAllDepartments };
