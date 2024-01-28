function addressBook(input){

let peopleAddresses = {};

for (let line of input) {
    
    let tokens = line.split(":");
    
    let personsName = tokens[0];
    let address = tokens[1];

    peopleAddresses[personsName] = address;
}

const sorted = Object.keys(peopleAddresses)
.sort()
.reduce((accumulator, key) => {
    accumulator[key] = peopleAddresses[key];
    
    return accumulator;
}, {});

for (let key in sorted) {
    console.log(`${key} -> ${sorted[key]}`);
   }
   
}

addressBook(['Tim:Doe Crossing',
             'Bill:Nelson Place',
             'Peter:Carlyle Ave',
             'Bill:Ornery Rd']);