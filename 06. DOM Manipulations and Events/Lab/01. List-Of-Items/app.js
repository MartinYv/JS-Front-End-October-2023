function addItem() {

    let newItemText = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let listItem = document.createElement('li');
    listItem.appendChild(document.createTextNode(newItemText));
    
    list.appendChild(listItem);
}