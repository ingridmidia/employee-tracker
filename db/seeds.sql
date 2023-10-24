-- populates tables in database
INSERT INTO department (name)
VALUES ("Veterinary Medicine"),
       ("Client Care"),
       ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Lead DVM", 150000, 1),
       ("DVM", 100000, 1),
       ("Technician", 60000, 1),
       ("Lead Client Care", 60000, 2),
       ("Client Care", 35000, 2),
       ("Accountant", 65000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Selena", "Brown", 1, NULL),
       ("Finn", "Davis", 2, 1),
       ("Mia", "White", 3, 1),
       ("Susan", "Harris", 3, 1),
       ("Maggie", "Miranda", 4, NULL),
       ("Louis", "Wilson", 5, 5),
       ("Mark", "Jones", 5, 5),
       ("Ashley", "Miller", 6, NULL);