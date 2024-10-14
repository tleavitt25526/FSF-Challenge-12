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

const viewTable = function (table) {
  console.log(table);
  return table;
};

const addTable = function (table) {
  console.log(table);
  return table;
};

const updateRole = function (role) {
  console.log(role);
  return role;
};

async function main() {
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
        return viewTable("employee");
      } else if (answers.choice == choices_list[1]) {
        return addTable("employee");
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

  main();
}

module.exports = { main };
