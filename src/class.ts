// PLAYER CLASS:
export class Player {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }

    // function to decrease Player fuel
    fuelAdjust() {
        let fuel = this.fuel - 20
        this.fuel = fuel
    }

    // function for special attack:
    specialAttack(){
        let fuel = this .fuel - 50
        this.fuel = fuel
    }

    // function to boost fuel:
    boostEnergy(){
        let fuel = 100
        this.fuel = fuel
    }
}

// OPPONENT CLASS:
export class Opponent {
    name: string;
    fuel: number = 100;
    constructor(name: string) {
        this.name = name;
    }

    // function to decrease Opponent fuel
    fuelAdjust() {
        let fuel = this.fuel - 20
        this.fuel = fuel
    }

    // function for special attack:
    specialAttack(){
        let fuel = this .fuel - 50
        this.fuel = fuel
    }

    // function to boost fuel:
    boostEnergy(){
        let fuel = 100
        this.fuel = fuel
    }
}