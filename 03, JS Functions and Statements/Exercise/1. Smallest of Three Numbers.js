function smallesNumber(numOne, numTwo, numThree){

    let numbers = [numOne, numTwo, numThree].sort((a, b) => a - b);
    console.log(numbers[0]);
}

smallesNumber(-5, 10 , 142);
smallesNumber(600,342,123)