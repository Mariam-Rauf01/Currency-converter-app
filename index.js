#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blueBright.bold("________Welcome to Currency Converter App!________" + "\n"));
const currency = {
    USD: 1, //based currency
    EUR: 0.92,
    GBP: 0.79,
    INR: 83.28,
    PKR: 277.56,
};
let userAnswer = await inquirer.prompt([
    {
        name: "from",
        message: chalk.yellowBright.italic("Enter the currency you want to convert from : "),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "to",
        message: chalk.yellowBright.italic("Enter the currency you want to convert to : "),
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"],
    },
    {
        name: "amount",
        message: chalk.yellowBright.italic("Enter the amount : "),
        type: chalk.blue("number"),
    },
]);
let fromAmount = currency[userAnswer.from]; //exchange rate
let toAmount = currency[userAnswer.to]; //exchange rate
let amount = userAnswer.amount;
let baseAmount = amount / fromAmount; //USD based currency    
let convertedAmount = baseAmount * toAmount;
console.log(chalk.greenBright.italic("\n" + "The converted amount is :"));
console.log(chalk.yellow.bold.underline(`$${amount} ${userAnswer.from} = $${convertedAmount} ${userAnswer.to}`));
console.log(chalk.blueBright.bold("\n" + "________Thank you for using our app!________"));
