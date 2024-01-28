function sortAndPrint(array){

  for (let index = 0; index < array.sort().length; index++) {
    
    console.log(`${index + 1}.${array[index]}`);
  }
}

sortAndPrint(["John", "Bob", "Christina", "Ema"]);