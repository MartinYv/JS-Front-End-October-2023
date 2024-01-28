function printFromAscii(charA, charB){

    let startIndex = charA.charCodeAt();
    let endIndex = charB.charCodeAt();

    let tempIndex = 0;

    if (startIndex > endIndex) {
        tempIndex = startIndex;

        startIndex = endIndex;
        endIndex = tempIndex;
    }

    let charsToPrint = "";

    for (let index = startIndex+1; index < endIndex; index++) {
        
        charsToPrint += String.fromCharCode(index) + " ";
    }

    console.log(charsToPrint);
}

printFromAscii('a', 'd');
printFromAscii('#', ':');