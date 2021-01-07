const mysql = require("mysql");
const inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: "root",
    password: "Susej123!",
    database: "employee_cli",
});

connection.connect(function(err){
    if (err) throw err;
    startApp();
});

function startApp(){
    inquirer.prompt({
        name:"action",
        type:"list",
        message:"What would you like to do?",
        choices:["View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "Exit"
    ]
    }).then(function(prompt){
        switch (prompt.action){
            case "View all departments":
                viewAllDepartments();
            break;    

            case "View all roles":
                viewAllRoles();
            break;
            
            case "View all employees":
                viewAllEmployees();
            break;
            
            case "Add a department":
                addDeparment();
            break;
            
            case "Add a role":
                addRole();
            break;  

            case "Add an employee":
                addEmployee();
            break;  

            case "Update employee role":
                updateEmployeeRole();
            break;  

            case "Exit":
                connection.end();
            break    
        }
    })
}

//Function for viewing all departments
function viewAllDepartments(){
    let query = "SELECT * FROM department";
    connection.query (query, function (err, res){
        console.table(`DEPARTMENTS:`)
        res.forEach(department => {
            console.table (`ID: ${department.id} | Name: ${department.name}`)            
        })       
    });
    startApp();     
};

//Function for viewing all roles
function viewAllRoles(){
    let query="SELECT * FROM role";
    connection.query (query, function(err, res){
        console.table(`ROLES:`)
        res.forEach(role => {
            console.table (`ID: ${role.id} | Name: ${role.name}`)
        });
    });
    startApp();
};

//Function for viewing all employees
function viewAllEmployees(){
    let query="SELECT * FROM employee";
    connection.query (query, function(err, res){
        console.table(`EMPLOYEES:`)
        res.forEach(role => {
            console.table(`ID: ${employee.id} | Name: ${employee.name}`)
        });
    });
};

//Function for adding a department
function addDeparment(){
    inquirer.prompt({
        name: "deparment",
        type: "input",
        message: "What is the name of the department you want to add?",
        })
    .then(function(prompt){
        let query = "INSERT INTO department (name) VALUES ( ? )"
        connection.query(query, prompt.deparment, function(err,res){
            console.log(`You have added: ${prompt.department}`)
        });
    viewAllDepartments();    
    });    
};

//Function for adding a role
function addRole(){
    inquirer.prompt({
        name:"role",
        type: "inpuit",
        message:"What role would you like to add?",
        })
    .then(function(prompt){
        let query= "INSERT INTO role (name) VALUES (?)"
        connection.query(query, prompt.role, function(err, res){
            console.log(`You have added: ${prompt.role}`)
        }); 
    viewAllRoles();
    });
};

//Function for adding an employee
function addEmployee(){
    inquirer.prompt({
        name:"employee",
        type:"input",
        message:"What is the name of the employee you would like to add?",
        })
    .then(function(prompt){
        let query= "INSERT INTO employee (name) VALUES (?)"
        connection.query(query, prompt.role, function(err, res){
            console.log(`You have added: ${prompt.employee}`)
        });
    viewAllEmployees();
    });    
};

//Function for updating Employee roles
function updateEmployeeRole(){
    inquirer.prompt({
        name:"update role",
        type:"input",
        message:"What would you like to update this employee's role to?",
        })
    .then(function(prompt){
        let query= "INSERT INTO role (name) VALUES (?)"
        connection.query(query, prompt.role, function(err, res){
            console.log(`You have successfully updated ${employee.name} role to: ${prompt.role}`)
        });
    viewAllRoles();    
    }); 
};