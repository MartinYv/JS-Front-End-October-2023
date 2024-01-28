function isTheNumPerfect(number){

    let divisors = []

    for (let i = 0; i < number; i++) {

        if (number % i == 0) {
            divisors.push(i);
        }
    }

    let isItFound = false;
    let sum = 0;

    for (let i = 0; i < divisors.length; i++) {
        
        sum += divisors[i];

        if (sum == number) {
            isItFound = true;
            break;
        }
    }

    if (isItFound) {
        console.log("We have a perfect number!")
    }
    else{
        console.log("It's not so perfect.");
    }
}

isTheNumPerfect(1236498);