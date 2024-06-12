#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t\tWellome to Iqra Khan - CLI Number Guessing Game.\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const Answer = await inquirer.prompt([
    {
        name: "userGuesseNumber",
        type: "number",
        message: "Enter Your Guess Number(Number Limit from 1 to 5):",
    },
]);
if (Answer.userGuesseNumber === randomNumber) {
    console.log("Congratulation! Your Guess a correct Number.");
}
else {
    console.log("Sorry, You Guess a Wrong Number.");
}
