function solve(input) {

    let baristas = {};

    let numberOfBaristas = input.shift();

    for (let i = 0; i < numberOfBaristas; i++) {

        let data = input.shift().split(' ');

        let name = data[0];
        let shift = data[1];
        let coffiesList = data[2].split(',');

        baristas[name] = {
            shift: shift,
            coffies: coffiesList
        };
    }

    let line = input.shift();
    while (line != 'Closed') {

        let tokens = line.split(' / ');
        let command = tokens.shift();

        if (command == 'Prepare') {
            const [name, shift, coffee] = tokens;

            let barista = baristas[name];

            if (barista.coffies.includes(coffee) && barista.shift === shift) {

                console.log(`${name} has prepared a ${coffee} for you!`);
            }
            else {
                console.log(`${name} is not available to prepare a ${coffee}.`);
            }

        }
        else if (command == 'Change Shift') {
            const [name, shift] = tokens;

            let barista = baristas[name];
            barista.shift = shift;

            console.log(`${name} has updated his shift to: ${shift}`)
        }
        else if (command == 'Learn') {
            const [name, coffee] = tokens;

            let barista = baristas[name];

            if (barista.coffies.includes(coffee)) {
                console.log(`${name} knows how to make ${coffee}.`);
            }
            else {
                barista.coffies.push(coffee);

                console.log(`${name} has learned a new coffee type: ${coffee}.`);
            }
        }

        line = input.shift();
    }

    for (const [key, value] of Object.entries(baristas)) {

        console.log(`Barista: ${key}, Shift: ${value.shift}, Drinks: ${value.coffies.join(', ')}`);
    }
}

solve([
    '3',
    'Alice day Espresso,Cappuccino',
    'Bob night Latte,Mocha',
    'Carol day Americano,Mocha',
    'Prepare / Alice / day / Espresso',
    'Change Shift / Bob / night',
    'Learn / Carol / Latte',
    'Learn / Bob / Latte',
    'Prepare / Bob / night / Latte',
    'Closed'])