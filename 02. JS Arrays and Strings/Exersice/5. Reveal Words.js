function solve(arrayOfWords, text){

let corectedArray = arrayOfWords.split(', ');

for (let i = 0; i < corectedArray.length; i++) {
    
    let word = '*'.repeat(corectedArray[i].length);

    for (const currWord of text.split(' ')) {
        
        if (currWord == word) {
            text = text.replace(word, corectedArray[i]);
        }
    }
}

console.log(text);
}

solve('great, learning', 'softuni is ***** place for ******** new programming languages');
solve('great', 'softuni is ***** place for learning new programming languages');