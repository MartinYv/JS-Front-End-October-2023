function positiveOrNegative(numOne, numTwo, numThree){

    let nums = [numOne, numTwo, numThree];
    let negativeNums = 0;

for (let index = 0; index < nums.length; index++) {

    if (nums[index] < 0) {
        negativeNums++;
    }
}

if(negativeNums % 2 == 0) {
    console.log("Positive")
}
else {
    console.log("Negative");
}
}

positiveOrNegative(5, 12, -15);
positiveOrNegative(-6, -12, 14);
positiveOrNegative(-1, -2, -3);