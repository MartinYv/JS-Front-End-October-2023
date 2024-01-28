function substring(word, text){

if (text.toUpperCase().includes(word.toUpperCase())) {
    return console.log(word);
}
else{
    return console.log(`${word} not found!`);
}

}

substring('javascript', 'JavaScript is the best programming language');
substring('python', 'JavaScript is the best programming language');