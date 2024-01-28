function solve(input) {

    let horses = input.shift().split('|');

    let commandLine = input.shift();
    while (commandLine != 'Finish') {

        let commandsData = commandLine.split(' ');
        let command = commandsData.shift();

        if (command == 'Retake') {
            const [overtaker, overtaken] = commandsData;

            let overtakerIndex = horses.indexOf(overtaker);
            let overtakenIndex = horses.indexOf(overtaken);

            if (overtakerIndex < overtakenIndex) { //[4, 3, 2, 1]

                horses[overtakerIndex] = overtaken;
                horses[overtakenIndex] = overtaker;

                console.log(`${overtaker} retakes ${overtaken}.`);
            }
        }
        else if (command == 'Trouble') {

            let horseName = commandsData.shift();
            let indexOfHorse = horses.indexOf(horseName);

            if (indexOfHorse >= 1) {


                let horseToShiftName = horses[indexOfHorse - 1];

                horses[indexOfHorse] = horseToShiftName;
                horses[indexOfHorse - 1] = horseName;

                console.log(`Trouble for ${horseName} - drops one position.`);
            }
        }
        else if (command == 'Rage') {
            let horseName = commandsData.shift();
            let indexOfHorse = horses.indexOf(horseName)

            if (indexOfHorse == horses.length - 3 || indexOfHorse == horses.length - 2) { //|3|2|1|
                let firstHorse = horses.splice(indexOfHorse, 1);
                horses.push(firstHorse[0]) 
            }
            else {
                let firstHorse = horses.splice(indexOfHorse, 1);
                horses.splice(firstHorse[0], 0, indexOfHorse + 2);
            }
            console.log(`${horseName} rages 2 positions ahead.`);
        }

        else if (command == 'Miracle') {
                  
                let horse = horses.shift();
                horses.push(horse);
                
                console.log(`What a miracle - ${horses[horses.length - 1]} becomes first.`);
        }

        commandLine = input.shift();
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`);
}

 




solve((['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish']))

// solve(['Fancy|Lilly',
// 'Retake Lilly Fancy',
// 'Trouble Lilly',
// 'Trouble Lilly',
// 'Finish',
// 'Rage Lilly'])