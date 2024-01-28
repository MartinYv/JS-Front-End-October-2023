function addItem() {
    let itemsList = document.querySelector('#items');

    let newItemText = document.getElementById('newItemText').value;

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(newItemText));
   
    //creating href with text "DELETE" and adding it to the "li"
    let deleteLink = document.createElement('a');
    deleteLink.textContent = '[Delete]';
    deleteLink.href = "#";
    li.appendChild(deleteLink);

    deleteLink.addEventListener('click', deleteItem);

    itemsList.appendChild(li);

    function deleteItem(e){
       row = e.currentTarget.parentNode;
       row.remove();
    }
}