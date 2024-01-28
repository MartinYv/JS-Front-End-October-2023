function extractText() {
    let listItems = document.getElementsByTagName('li'); //(ul#items li)
    let arrayOfItems = Array.from(listItems);

    let textarea = document.querySelector("#result");
    
    for (const item of arrayOfItems) {
        textarea.value += item.textContent + '\n';
    }
}
