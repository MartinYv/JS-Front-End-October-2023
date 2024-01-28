function wordFinder(sentence){
    
    let wordsToFind = sentence.shift().split(" ");

    let words = [];

    for (const word of wordsToFind) {
        words[word] = 0;

        for (const wordInSentence of sentence) {    
           
            if (word == wordInSentence) {
                
                if (words.hasOwnProperty(word)) {
                    
                    words[word] ++;
                }
            }
            
        };
    }
    
   words = Object.entries(words).sort((a, b) => b[1] - a[1]);

    for (const word in words) {
        console.log(`${words[word][0]} - ${words[word][1]}`);
    }
}


wordFinder([

    'this sentence',
    
    'In', 'this', 'sentence', 'you', 'have',
    
    'to', 'count', 'the', 'occurrences', 'of',
    
    'the', 'words', 'this', 'and', 'sentence',
    
    'because', 'this', 'is', 'your', 'task'
    
    ]);

    wordFinder([

        'is the',
        
        'first', 'sentence', 'Here', 'is',
        
        'another', 'the', 'And', 'finally', 'the',
        
        'the', 'sentence']);