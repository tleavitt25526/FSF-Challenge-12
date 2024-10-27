const inquirer = require("inquirer");

const choices_list = [
  "View All Employees",
  "Add Employee",
  "Update Employee Role",
  "View All Roles",
  "Add Role",
  "View All Departments",
  "Add Department",
];

const viewTable = function (table, pool) {
  pool.query(`SELECT * FROM ${table}`, function (err, { rows }) {
    if (err) {
      console.log(err);
    }
    console.log(rows);
  });
};

const addDepartment = function (pool) {
  const getData = inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Department Name"
    },
  ])
  .then((answers) => {
    pool.query(`INSERT INTO department (name) VALUES (${answers.choice}) RETURNING *`, function (err) {
        if (err) {
            console.log(err);
        }
    });
  });
};

const updateRole = function (role, pool) {
  console.log(role);
  return role;
};

async function main(pool) {
  console.log("Application Running.");

  const getChoice = await inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What would you like to do?",
        choices: choices_list,
      },
    ])
    .then((answers) => {
      console.log(`Choice: ${answers.choice}`);
      if (answers.choice == choices_list[0]) {
        return viewTable("employee", pool);
      } else if (answers.choice == choices_list[1]) {
        return addDepartment(pool);
      } else if (answers.choice == choices_list[2]) {
        return updateRole("role");
      } else if (answers.choice == choices_list[3]) {
        return viewTable("role");
      } else if (answers.choice == choices_list[4]) {
        return addTable("role");
      } else if (answers.choice == choices_list[5]) {
        return addTable("department");
      } else if (answers.choice == choices_list[6]) {
        return addTable("department");
      }
    });
}

module.exports = { main };
