#!/usr/bin/env node
import inquirer from "inquirer";
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "numberOne",
        message: "Kindly enter your first no: ",
    },
    {
        type: "number",
        name: "numberTwo",
        message: "Kindly enter your Second no: ",
    },
    {
        type: "list",
        name: "operator",
        choices: ["+", "-", "*", "/", "**", "%"],
        message: "Select Operator",
    },
]);
const { numberOne, numberTwo, operator } = answers;
if (numberOne && numberTwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberOne + numberTwo;
    }
    else if (operator === "-") {
        result = numberOne - numberTwo;
    }
    if (operator === "*") {
        result = numberOne * numberTwo;
    }
    if (operator === "/") {
        result = numberOne / numberTwo;
    }
    if (operator === "**") {
        result = numberOne ** numberTwo;
    }
    if (operator === "%") {
        result = numberOne % numberTwo;
    }
    console.log("Your result is : ", result);
}
else {
    console.log("Kindly enter valid input");
}
