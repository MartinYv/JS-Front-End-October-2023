function jsonSerialize(firstName, lastName, hairColor){

let obj = {
    name: firstName,
    lastName: lastName,
    hairColor: hairColor
};

let serializeToJson= JSON.stringify(obj);
console.log(serializeToJson);
}

jsonSerialize('George', 'Jones', 'Brown');