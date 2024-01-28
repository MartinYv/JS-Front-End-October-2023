function solve(input) {

    let austronauts = {};

    let numberOfAustronauts = input.shift();
    //adding austronauts

    for (let i = 0; i < numberOfAustronauts; i++) {
        const [name, oxigen, energy] = input.shift().split(' ')

        austronauts[name] = {
            oxigen: Number(oxigen),
            energy: Number(energy)
        };
    }

    let commandData = input.shift();
    while (commandData != 'End') {
        const [command, name, amount] = commandData.split(' - ');

        let austronaut = austronauts[name];

        if (command == 'Explore') {

            if (austronaut.energy >= amount) {

                austronaut.energy -= amount;

                console.log(`${name} has successfully explored a new area and now has ${austronaut.energy} energy!`)
            }
            else {
                console.log(`${name} does not have enough energy to explore!`);
            }
        }
        else if (command == 'Refuel') {

            if (austronaut.energy + Number(amount) > 200) {

                let energyFuel = Math.abs(amount - (200 - austronaut.energy + Number(amount)));

                console.log(`${name} refueled their energy by ${energyFuel}!`);

                austronaut.energy = 200;
            }
            else {
                austronaut.energy += Number(amount);
                    
                console.log(`${name} refueled their energy by ${amount}!`);

            }
        }
        else if (command == 'Breathe') {
            if (austronaut.oxigen + Number(amount) > 100) {

                let oxigenFueld = Math.abs(amount - (100 - austronaut.oxigen + Number(amount)));

                console.log(`${name} took a breath and recovered ${oxigenFueld} oxygen!`);

                austronaut.oxigen = 100;
            }
            else {
                austronaut.oxigen += Number(amount);

                console.log(`${name} took a breath and recovered ${amount} oxygen!`)
            }
        }

        commandData = input.shift();
    }

    for (const [name] of Object.entries(austronauts)) {
        console.log(`Astronaut: ${name}, Oxygen: ${austronauts[name].oxigen}, Energy: ${austronauts[name].energy}`);

    }
}




solve(['3',
    'John 50 120',
    'Kate 80 180',
    'Rob 70 150',
    'Explore - John - 50',
    'Refuel - Kate - 30',
    'Breathe - Rob - 20',
    'End'])