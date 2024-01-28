function pascalCaseSplitter(text){

let regex = /([A-Z][a-z]+)/g;
const matches = text.matchAll(regex);

let arrayToPrint = [];

for (const match of matches) {
   
    arrayToPrint.push(match[0]);
}

console.log(arrayToPrint.join(", "))
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');