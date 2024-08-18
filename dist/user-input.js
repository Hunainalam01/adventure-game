import chalk from "chalk";
import inquirer from "inquirer";
// Ask user name:
export const playerAnswer = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: chalk.yellow("Enter Your Name:\n")
    }
]);
export const opponentAnswer = await inquirer.prompt([
    {
        name: "opponentPlayer",
        type: "list",
        message: chalk.yellow("Select Your Opponent:\n"),
        choices: ["Blaze", "Thorn", "Pikachu", "Lizard"]
    }
]);
