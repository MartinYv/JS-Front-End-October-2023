function smallesAndBiggest(array){

let sortedArray = [];

    let smallestNums = array.sort((a,b) => a-b).slice(0, array.length / 2);
    let biggestNums = array.sort((a,b) => b-a).slice(0, array.length / 2);

    for (let index = 0; index < array.length / 2; index++) {
        sortedArray.push(smallestNums[index]);
        sortedArray.push(biggestNums[index]);
    }

   return sortedArray;
}
//console.log(sortedArray.join(", "));

smallesAndBiggest([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);