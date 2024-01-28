function cityInfo(input){

let entities = Object.entries(input);

for(let [key, value] of entities){
    console.log(`${key} -> ${value}`);
}
}

cityInfo({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
   }
   );