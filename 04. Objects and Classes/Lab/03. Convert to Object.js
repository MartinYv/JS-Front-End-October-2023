function jsonDeserialize(input){

    let entities= JSON.parse(input);

    let lettt= Object.entries(entities);

    for(let [key, value] of lettt){
        console.log(`${key}: ${value}`);
    }
}

jsonDeserialize('{"name": "George", "age": 40, "town": "Sofia"}');