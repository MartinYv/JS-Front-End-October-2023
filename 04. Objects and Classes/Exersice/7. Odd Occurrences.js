function extractOddWords(sentence){
    
    let output = [];
    
    for (const char of sentence.toLowerCase().split(" ")) {
        
         
        if (output[char]) {
            output[char]++;
        }
        else{
            output[char] =1;
        }
       
       
    }

    let outputString = "";

    for (const char in output) {
        if (output[char] % 2 != 0) {
            outputString += char + " ";
        }
    }

    console.log(outputString.trim());
  
    // sentenceSplitted = sentence.toLowerCase().split(" ");
    // sentence = sentence.toLowerCase();
    
    // let output = [];
    
    // for (let i = 0; i < sentenceSplitted.length; i++) {
    //     let wordToFind = sentenceSplitted[i];
    
    //     if (sentence.includes(wordToFind)) {
    //         let matchCount = sentence.split(wordToFind).length -1;
           
    //             while (sentence.includes(wordToFind)) {
                    
    //                 sentence = sentence.replace(wordToFind, "");
    //             }
           
    //             if (matchCount % 2 != 0) {
    //             output.push(wordToFind);
    //         }
    //     }
    // }
    
    // console.log(output.join(" "));
    }
    
    extractOddWords('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
    extractOddWords('Cake IS SWEET is Soft CAKE sweet Food');
    extractOddWords("a a aa a aa aa b");