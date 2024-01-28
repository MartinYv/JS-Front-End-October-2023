function specialWord(text){

const regexp = /((#[a-zA-Z]+)\b)/g;
const matches = text.matchAll(regexp);

for (const match of matches) {
    console.log(match[0].substring(1, match[0].length));
}
}
specialWord('Nowadays everyone uses # to tag a #special word in #socialMedia');