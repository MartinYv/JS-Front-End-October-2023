function solve(numOne, numTwo){

let sumNumOne = 1;
let sumNumTwo = 1;

for (let i = 1; i < numOne; i++) {

    sumNumOne *=  i+1;
}

for (let i = 1; i < numTwo; i++) {

    sumNumTwo *= i+1;
}

let total = sumNumOne /= sumNumTwo;

console.log(total.toFixed(2));
}

solve(5, 2);