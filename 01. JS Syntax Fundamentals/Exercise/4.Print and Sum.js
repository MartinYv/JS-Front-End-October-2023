function sumNumbers(startNum, endNum){

    let totalSum = 0;
    let array = [];
for (let index = startNum; index <= endNum; index++) {
    
    totalSum += index;
    array += index + " ";
}
    console.log(array);
    console.log(`Sum: ${totalSum}`);
}

sumNumbers(0, 26);