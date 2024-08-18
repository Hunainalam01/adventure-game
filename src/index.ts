import chalk from "chalk";
import inquirer from "inquirer";

// IMPORT CLASSES FROM ./class.js
import { Player, Opponent } from "./class.js"

// IMPORT USER BEHAVIOR FROM /user-input.js
import { playerAnswer, opponentAnswer } from "./user-input.js";


const p1 = new Player(playerAnswer.userName)
const o1 = new Opponent(opponentAnswer.opponentPlayer)
console.log(p1);
console.log(o1);

do {
    // Blaze portion
    if (opponentAnswer.opponentPlayer == "Blaze") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "select your move\n",
                choices: ["Attack", "Charge", "Defend", "Special Attack", "Run", "Exit"]
            }
        ]);

        // Move 01
        if (ask.option == "Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${p1.name} fuel decrease remaining fuel is ${chalk.red.bold(p1.fuel)}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }

            if (p1.fuel <= 0) {
                console.log(`${chalk.red.bold(p1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }

            if (randomNum == 1) {
                o1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${o1.name} fuel decrease remaining fuel is ${chalk.red.bold(o1.fuel)}\n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (o1.fuel <= 0) {
                console.log(`${chalk.red.bold(o1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }


        }

        // Move 02
        if (ask.option == "Charge") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.boostEnergy()
                console.log(`${chalk.green.bold(`Let's Boost The Charge...`)} ${p1.name} fuel is ${p1.fuel}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

            }
            if (randomNum == 1) {
                o1.boostEnergy()
                console.log(`${chalk.red.bold(`Let's Boost The Charge...`)} ${o1.name} fuel is ${o1.fuel}\n`);
                console.log(`${chalk.red.bold(p1.name)} fuel is ${chalk.red.bold(p1.fuel)}\n`);
            }
        }

        // Move 03
        if (ask.option == "Defend") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(`${chalk.bold.green(p1.name)} ${chalk.green(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (randomNum == 1) {
                console.log(`${chalk.bold.green(o1.name)} ${chalk.red(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }
        }

        // Move 04
        if (ask.option == "Special Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${p1.name} fuel decrease remaining fuel is ${p1.fuel}\n
              `);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold(`${p1.name} YOU LOOSE THE GAME !!!\n`));
                    process.exit()
                }
            }
            if (randomNum == 1) {
                o1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${o1.name} fuel decrease remaining fuel is ${o1.fuel}
              \n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);

            }
            if (o1.fuel <= 0) {
                console.log(chalk.red.bold(`${o1.name} YOU LOOSE THE GAME !!!\n`));
                process.exit()
            }
        }

        // Move 05
        if (ask.option == "Run") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(chalk.yellow(`${p1.name} Run From The Fight...\n`));
                console.log(chalk.red(`${chalk.green.bold(p1.name)} LOOSE THE GAME !!! ${o1.name} ${chalk.red.bold(`WIN'S`)}  \n`));
                process.exit()
            }
            if (randomNum == 1) {
                console.log(chalk.yellow(`${o1.name} Run From The Fight...\n`));
                console.log(chalk.white(`${chalk.red.bold(o1.name)} LOOSE THE GAME !!! ${chalk.green.bold(`${p1.name} WIN'S`)}  \n`));
                process.exit()
            }
        }

        // Exit the game
        if (ask.option == "Exit") {
            console.log(chalk.blue("Exiting the game...\n"));
            break;
        }
    }

    // =============================== #$#$#$# ===============================

    // Thorn Thorn 
    if (opponentAnswer.opponentPlayer == "Thorn") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "select your move\n",
                choices: ["Attack", "Charge", "Defend", "Special Attack", "Run", "Exit"]
            }
        ]);

        // Move 01
        if (ask.option == "Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${p1.name} fuel decrease remaining fuel is ${chalk.red.bold(p1.fuel)}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }

            if (p1.fuel <= 0) {
                console.log(`${chalk.red.bold(p1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }

            if (randomNum == 1) {
                o1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${o1.name} fuel decrease remaining fuel is ${chalk.red.bold(o1.fuel)}\n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (o1.fuel <= 0) {
                console.log(`${chalk.red.bold(o1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }


        }

        // Move 02
        if (ask.option == "Charge") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.boostEnergy()
                console.log(`${chalk.green.bold(`Let's Boost The Charge...`)} ${p1.name} fuel is ${p1.fuel}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

            }
            if (randomNum == 1) {
                o1.boostEnergy()
                console.log(`${chalk.red.bold(`Let's Boost The Charge...`)} ${o1.name} fuel is ${o1.fuel}\n`);
                console.log(`${chalk.red.bold(p1.name)} fuel is ${chalk.red.bold(p1.fuel)}\n`);
            }
        }

        // Move 03
        if (ask.option == "Defend") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(`${chalk.bold.green(p1.name)} ${chalk.green(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (randomNum == 1) {
                console.log(`${chalk.bold.green(o1.name)} ${chalk.red(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }
        }

        // Move 04
        if (ask.option == "Special Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${p1.name} fuel decrease remaining fuel is ${p1.fuel}\n
              `);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold(`${p1.name} YOU LOOSE THE GAME !!!\n`));
                    process.exit()
                }
            }
            if (randomNum == 1) {
                o1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${o1.name} fuel decrease remaining fuel is ${o1.fuel}
              \n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);

            }
            if (o1.fuel <= 0) {
                console.log(chalk.red.bold(`${o1.name} YOU LOOSE THE GAME !!!\n`));
                process.exit()
            }
        }

        // Move 05
        if (ask.option == "Run") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(chalk.yellow(`${p1.name} Run From The Fight...\n`));
                console.log(chalk.red(`${chalk.green.bold(p1.name)} LOOSE THE GAME !!! ${o1.name} ${chalk.red.bold(`WIN'S`)}  \n`));
                process.exit()
            }
            if (randomNum == 1) {
                console.log(chalk.yellow(`${o1.name} Run From The Fight...\n`));
                console.log(chalk.white(`${chalk.red.bold(o1.name)} LOOSE THE GAME !!! ${chalk.green.bold(`${p1.name} WIN'S`)}  \n`));
                process.exit()
            }
        }

        // Exit the game
        if (ask.option == "Exit") {
            console.log(chalk.blue("Exiting the game...\n"));
            break;
        }
    }

    // =============================== #$#$#$# ===============================

    // Thorn Pikachu 
    if (opponentAnswer.opponentPlayer == "Pikachu") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "select your move\n",
                choices: ["Attack", "Charge", "Defend", "Special Attack", "Run", "Exit"]
            }
        ]);

        // Move 01
        if (ask.option == "Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${p1.name} fuel decrease remaining fuel is ${chalk.red.bold(p1.fuel)}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }

            if (p1.fuel <= 0) {
                console.log(`${chalk.red.bold(p1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }

            if (randomNum == 1) {
                o1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${o1.name} fuel decrease remaining fuel is ${chalk.red.bold(o1.fuel)}\n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (o1.fuel <= 0) {
                console.log(`${chalk.red.bold(o1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }


        }

        // Move 02
        if (ask.option == "Charge") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.boostEnergy()
                console.log(`${chalk.green.bold(`Let's Boost The Charge...`)} ${p1.name} fuel is ${p1.fuel}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

            }
            if (randomNum == 1) {
                o1.boostEnergy()
                console.log(`${chalk.red.bold(`Let's Boost The Charge...`)} ${o1.name} fuel is ${o1.fuel}\n`);
                console.log(`${chalk.red.bold(p1.name)} fuel is ${chalk.red.bold(p1.fuel)}\n`);
            }
        }

        // Move 03
        if (ask.option == "Defend") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(`${chalk.bold.green(p1.name)} ${chalk.green(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (randomNum == 1) {
                console.log(`${chalk.bold.green(o1.name)} ${chalk.red(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }
        }

        // Move 04
        if (ask.option == "Special Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${p1.name} fuel decrease remaining fuel is ${p1.fuel}\n
              `);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold(`${p1.name} YOU LOOSE THE GAME !!!\n`));
                    process.exit()
                }
            }
            if (randomNum == 1) {
                o1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${o1.name} fuel decrease remaining fuel is ${o1.fuel}
              \n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);

            }
            if (o1.fuel <= 0) {
                console.log(chalk.red.bold(`${o1.name} YOU LOOSE THE GAME !!!\n`));
                process.exit()
            }
        }

        // Move 05
        if (ask.option == "Run") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(chalk.yellow(`${p1.name} Run From The Fight...\n`));
                console.log(chalk.red(`${chalk.green.bold(p1.name)} LOOSE THE GAME !!! ${o1.name} ${chalk.red.bold(`WIN'S`)}  \n`));
                process.exit()
            }
            if (randomNum == 1) {
                console.log(chalk.yellow(`${o1.name} Run From The Fight...\n`));
                console.log(chalk.white(`${chalk.red.bold(o1.name)} LOOSE THE GAME !!! ${chalk.green.bold(`${p1.name} WIN'S`)}  \n`));
                process.exit()
            }
        }

        // Exit the game
        if (ask.option == "Exit") {
            console.log(chalk.blue("Exiting the game...\n"));
            break;
        }
    }

    // =============================== #$#$#$# ===============================

    // Thorn Lizard 
    if (opponentAnswer.opponentPlayer == "Lizard") {
        console.log(`${chalk.bold.green(p1.name)} VS ${chalk.bold.red(o1.name)}`);

        let ask = await inquirer.prompt([
            {
                name: "option",
                type: "list",
                message: "select your move\n",
                choices: ["Attack", "Charge", "Defend", "Special Attack", "Run", "Exit"]
            }
        ]);

        // Move 01
        if (ask.option == "Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${p1.name} fuel decrease remaining fuel is ${chalk.red.bold(p1.fuel)}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }

            if (p1.fuel <= 0) {
                console.log(`${chalk.red.bold(p1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }

            if (randomNum == 1) {
                o1.fuelAdjust()
                console.log(`${chalk.red(`ATTAAACK !!!`)} ${o1.name} fuel decrease remaining fuel is ${chalk.red.bold(o1.fuel)}\n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (o1.fuel <= 0) {
                console.log(`${chalk.red.bold(o1.name)} YOU LOOSE THE GAME !!!\n`);
                process.exit()
            }


        }

        // Move 02
        if (ask.option == "Charge") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.boostEnergy()
                console.log(`${chalk.green.bold(`Let's Boost The Charge...`)} ${p1.name} fuel is ${p1.fuel}\n`);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

            }
            if (randomNum == 1) {
                o1.boostEnergy()
                console.log(`${chalk.red.bold(`Let's Boost The Charge...`)} ${o1.name} fuel is ${o1.fuel}\n`);
                console.log(`${chalk.red.bold(p1.name)} fuel is ${chalk.red.bold(p1.fuel)}\n`);
            }
        }

        // Move 03
        if (ask.option == "Defend") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(`${chalk.bold.green(p1.name)} ${chalk.green(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.green.bold(p1.fuel)}\n`);
            }
            if (randomNum == 1) {
                console.log(`${chalk.bold.green(o1.name)} ${chalk.red(`Shield raised, No fuel Detected`)} current Fuel is ${chalk.red.bold(o1.fuel)}\n`);
            }
        }

        // Move 04
        if (ask.option == "Special Attack") {
            let randomNum: number = Math.floor(Math.random() * 2);

            if (randomNum == 0) {
                p1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${p1.name} fuel decrease remaining fuel is ${p1.fuel}\n
              `);
                console.log(`${chalk.red.bold(o1.name)} fuel is ${chalk.red.bold(o1.fuel)}\n`);

                if (p1.fuel <= 0) {
                    console.log(chalk.red.bold(`${p1.name} YOU LOOSE THE GAME !!!\n`));
                    process.exit()
                }
            }
            if (randomNum == 1) {
                o1.specialAttack()
                console.log(`
                ${chalk.red(`Through special Attack !!!`)} ${o1.name} fuel decrease remaining fuel is ${o1.fuel}
              \n`);
                console.log(`${chalk.green.bold(p1.name)} fuel is ${chalk.green.bold(p1.fuel)}\n`);

            }
            if (o1.fuel <= 0) {
                console.log(chalk.red.bold(`${o1.name} YOU LOOSE THE GAME !!!\n`));
                process.exit()
            }
        }

        // Move 05
        if (ask.option == "Run") {
            let randomNum: number = Math.floor(Math.random() * 2)
            if (randomNum == 0) {
                console.log(chalk.yellow(`${p1.name} Run From The Fight...\n`));
                console.log(chalk.red(`${chalk.green.bold(p1.name)} LOOSE THE GAME !!! ${o1.name} ${chalk.red.bold(`WIN'S`)}  \n`));
                process.exit()
            }
            if (randomNum == 1) {
                console.log(chalk.yellow(`${o1.name} Run From The Fight...\n`));
                console.log(chalk.white(`${chalk.red.bold(o1.name)} LOOSE THE GAME !!! ${chalk.green.bold(`${p1.name} WIN'S`)}  \n`));
                process.exit()
            }
        }

        // Exit the game
        if (ask.option == "Exit") {
            console.log(chalk.blue("Exiting the game...\n"));
            break;
        }
    }

}

while (true)