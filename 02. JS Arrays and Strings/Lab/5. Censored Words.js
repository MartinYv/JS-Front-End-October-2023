function removeRepeatingWord(sentense, word){

    while (sentense.includes(word)) {
        
        sentense = sentense.replace(word, '*'.repeat(word.length));
    }

    console.log(sentense);
}

removeRepeatingWord('A small sentence with some words', 'small');