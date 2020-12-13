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
        })
    viewAllDepartments();    
    });    
};