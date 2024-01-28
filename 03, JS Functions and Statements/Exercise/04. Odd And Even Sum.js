function evenAndOddSum(numbers){

    let numbersArray = numbers.toString().split('');

    let evenNums = numbersArray.filter((x) => x % 2 == 0);
    let oddNums = numbersArray.filter((x) => x % 2 != 0);

    let evenSum = evenNums.reduce((a, b) => { return Number(a) + Number(b)}, 0)
    let oddSum = oddNums.reduce((a, b) => { return Number(a) + Number(b)}, 0);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}

evenAndOddSum(1000435)