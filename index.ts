#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let score = 0;
console.log(chalk.italic.yellowBright("QUIZ"));

let answer = await inquirer.prompt([
  {
    name: "Name",
    type: "input",
    message: "Enter your name :",
    validate: (value) => {
      if (value.trim() === "") {
        return "FILL OUT THIS FIELD";
      }
      return true;
    },
  },

  {
    name: "Q1",
    type: "list",
    message:
      "Which of the following is the correct way to declare a variable in TypeScript?",
    choices: [
      "A. let num: number = 10",
      "B. var num: 10",
      "C. num number = 10",
      "D. int num = 10",
    ],
  },
]);

switch (answer.Q1) {
  case "A. let num: number = 10":
    console.log(chalk.green("CORRECT ANSWER"));
    score++;
    break;
  default:
    console.log(chalk.red("WRONG ANSWER"));
}

let select = await inquirer.prompt({
  name: "Q2",
  type: "list",
  message:
    "Which TypeScript feature allows you to catch errors at compile time instead of runtime?",
  choices: [
    "A. Type Inference",
    "B. Type Annotations",
    "C. Interfaces",
    "D. Modules",
  ],
});
switch (select.Q2) {
    case "B. Type Annotations":
      console.log(chalk.green("CORRECT ANSWER"));
      score++;
      break;
    default:
      console.log(chalk.red("WRONG ANSWER"));
  }

let select3 = await inquirer.prompt({
  name: "Q3",
  type: "list",
  message: "What is the purpose of an interface in TypeScript?",
  choices: [
    "A. To create a blueprint for classes",
    "B. To define the structure of an object",
    "C. To compile TypeScript to JavaScript",
    "D. To perform type assertion",
  ],
});
switch (select3.Q3) {
    case "B. To define the structure of an object":
      console.log(chalk.green("CORRECT ANSWER"));
      score++;
      break;
    default:
      console.log(chalk.red("WRONG ANSWER"));
  }


let select4 = await inquirer.prompt({
  name: "Q4",
  type: "list",
  message: "JavaScript is which type of language?",
  choices: ["A. Interpreted", "B. Compiled", "C. Assembly", "D. Machine"],
});
switch (select4.Q4) {
    case "A. Interpreted":
      console.log(chalk.green("CORRECT ANSWER"));
      score++;
      break;
    default:
      console.log(chalk.red("WRONG ANSWER"));
  }

let select5 = await inquirer.prompt({
  name: "Q5",
  type: "list",
  message:
    "Which of the following statements regarding the scope of variables declared with let in TypeScript is true?",
  choices: [
    "A. Variables declared with let have global scope.",
    "B. Variables declared with let have function scope.",
    "C. Variables declared with let have block scope.",
    "D. Variables declared with let have module scope.",
  ],
});
switch (select5.Q5) {
    case "C. Variables declared with let have block scope.":
      console.log(chalk.green("CORRECT ANSWER"));
      score++;
      break;
    default:
      console.log(chalk.red("WRONG ANSWER"));
  }
console.log(chalk.italic.yellow(`${answer.Name} YOUR TOTAL SCORE IS  ${score}`))
console.log(chalk.bold.blackBright("GOOD BYEEEE"))