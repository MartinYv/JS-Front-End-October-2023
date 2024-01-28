function sumDigits (input){

    let arrOfDigits = Array.from(String(input), Number);

    var sum = arrOfDigits.reduce((a, b) => {
        return a + b
      }, 0);
    
      console.log(sum);
}

sumDigits(12345);