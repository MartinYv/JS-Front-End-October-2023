function deleteByEmail() {

let emailToDelete = document.querySelector('input[name="email"]').value;
let rows = Array.from(document.querySelectorAll('tbody tr'));

let result = document.getElementById('result');

for (const row of rows) {
        let email = row.children[1];
        
        if (email.textContent == emailToDelete) {
           row.parentNode.removeChild(row); //or just row.remove();

           result.textContent = "Deleted";
           break;
        }
}

    result.textContent = "Not found.";
}