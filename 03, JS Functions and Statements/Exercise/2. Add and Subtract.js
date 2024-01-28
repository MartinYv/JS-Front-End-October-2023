function SumAndSubstract(numOne, numTwo, numThree){

function subtract(sum, numThree){

    return sum -= numThree;

}

let sum = numOne + numTwo;

let result = subtract(sum, numThree);
console.log(result);
}

SumAndSubstract(23, 6, 10)