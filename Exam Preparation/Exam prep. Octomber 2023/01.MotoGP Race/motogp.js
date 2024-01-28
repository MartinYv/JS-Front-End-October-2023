function solve(input) {

    let racers = {};

    let numberOfRacers = Number(input.shift());

    for (let i = 0; i < numberOfRacers; i++) {
        const [racerName, fuel, position] = input[i].split('|');

        racers[racerName] = {
            fuel: Number(fuel),
            position: Number(position)
        };
    }

    input = input.slice(numberOfRacers, input.lenght);

    let raceInfo = input.shift();
    while (raceInfo !== 'Finish') {

        if (raceInfo == null || raceInfo == '') {
            break;
        }

        let data = raceInfo.split(' - ');
        let command = data.shift();

        if (command === 'StopForFuel') {
            const [racerName, minFuel, changePosition] = data;

            let racer = racers[racerName];

            if (racer.fuel < Number(minFuel)) {

                racer.position = Number(changePosition);
                
                console.log(`${racerName} stopped to refuel but lost his position, now he is ${changePosition}.`);
            }
            else {
                console.log(`${racerName} does not need to stop for fuel!`);
            }
        }
        else if (command === 'Overtaking') {
            const [racerOneName, racerTwoName] = data;

            let racerOne = racers[racerOneName];
            let racerTwo = racers[racerTwoName];

            if (racerOne.position < racerTwo.position) {
                let racerOnePosition = racerOne.position;

                racerOne.position = racerTwo.position;
                racerTwo.position = racerOnePosition;
    
                console.log(`${racerOneName} overtook ${racerTwoName}!`)
            }
           
        }
        else if (command === 'EngineFail') {
            const [racerName, lapsLeft] = data;

            console.log(`${racerName} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`);

            delete racers[racerName];
        }

        raceInfo = input.shift();
    }

    for (const racerName in racers) {
        console.log(`${racerName}`);
        console.log(`  Final position: ${racers[racerName].position}`);
    }
}

solve((["4",
    "Valentino Rossi|100|1",
    "Marc Marquez|90|3",
    "Jorge Lorenzo|80|4",
    "Johann Zarco|80|2",
    "StopForFuel - Johann Zarco - 90 - 5",
    "Overtaking - Marc Marquez - Jorge Lorenzo",
    "EngineFail - Marc Marquez - 10",
    "Finish"]));