function solve(numCount, numbers){

let numbersArray= [];

for (let index = 0; index < numCount; index++) {
    
    numbersArray.push(numbers[index]);
    
}

numbersArray.reverse();

console.log(numbersArray.join(" "));
}

solve(3, [10, 20, 30, 40, 50]);