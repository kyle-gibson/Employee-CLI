USE employee_cli;

INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Software Engineering");
INSERT INTO department (name) VALUES ("Finance");
INSERT INTO department (name) VALUES ("Human Resources");

INSERT INTO roles (title, salary,  department_id) VALUES("Sales Lead", 52000, 1);
INSERT INTO roles (title, salary,  department_id) VALUES("Software Engineer", 63500, 2);
INSERT INTO roles (title, salary,  department_id) VALUES("Lead Engineer", 75999, 2);
INSERT INTO roles (title, salary,  department_id) VALUES("Accountant", 82000, 3);
INSERT INTO roles (title, salary,  department_id) VALUES("Analyst", 99500, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Andy", "Stevenson", 1, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Lisa", "Gibson", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Matt", "Gendron", 3, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Harry", "Potter", 4, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Hermoine", "Granger", 5, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Garth", "Brooks", 2, NULL);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Little", "Jon", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("Marshall", "Mathers", 1, 2);














