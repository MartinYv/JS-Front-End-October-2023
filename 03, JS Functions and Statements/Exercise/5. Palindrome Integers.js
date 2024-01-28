function isItPalindrome(numbersArr){

    for (let i = 0; i < numbersArr.length; i++) {
        
        let reversed = numbersArr[i].toString().split('').reverse().join('');

        if (numbersArr[i].toString() == reversed) {
            console.log("true");
        }
        else{
            console.log("false");
        }   
    }
}

isItPalindrome([123,323,421,121]);