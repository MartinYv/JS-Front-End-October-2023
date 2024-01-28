function sumDifference (numbersArray){

    let evenNumsSum = 0;
    let oddNumsSum = 0;

    for (let index = 0; index < numbersArray.length; index++) {
       
        if(numbersArray[index] % 2 == 0){
            evenNumsSum += numbersArray[index];
        }
        else{
            oddNumsSum += numbersArray[index]
        }
    }

    console.log(evenNumsSum - oddNumsSum);
}

solve([3,5,7,9]);