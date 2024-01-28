function biggestNumber(numOne, numTwo, numThree){
    let numbers = [numOne, numTwo, numThree];
    console.log(`The largest number is ${Math.max.apply(null, numbers)}.`);
}

biggestNumber(1, 5, 15);