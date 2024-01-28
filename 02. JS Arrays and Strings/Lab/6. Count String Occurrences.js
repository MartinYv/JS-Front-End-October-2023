function countOfTheWord(sentence, word){

let counter = 0;

for (const currWord of sentence.split(" ")) {
   
    if(currWord == word){
        counter++;
    }
}

console.log(counter);
}

countOfTheWord('This is a word and it also is a sentence', 'is');