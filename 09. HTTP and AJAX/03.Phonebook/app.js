function attachEvents() {

    let phonebook = document.getElementById('phonebook');

    document.getElementById('btnCreate').addEventListener('click', () => {

        let inputPerson = document.querySelector('input[id="person"]');
        let inputPhone = document.querySelector('input[id="phone"]')

        let entity = {
            person: inputPerson.value,
            phone: inputPhone.value
        };

        fetch(`http://localhost:3030/jsonstore/phonebook`, {
            method: 'POST',
            body: JSON.stringify(entity)
        }).catch(error => {
            return error;
        })

        document.getElementById('btnLoad').click();

        phonebook.innerHTML = '';
        inputPerson.value = '';
        inputPhone.value = '';
    });

    document.getElementById('btnLoad').addEventListener('click', () => {

        phonebook.innerHTML = '';

        fetch(`http://localhost:3030/jsonstore/phonebook`).then(response => {
            return response.json();
        }).then(entities => {

            for (const entity of Object.values(entities)) {

                let li = document.createElement('li');
                li.textContent = `${entity.person}: ${entity.phone}`

                let deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.href = '#';
                deleteButton.dataset.entityId = entity._id;

                deleteButton.addEventListener('click', deleteEntity);

                li.appendChild(deleteButton);

                phonebook.appendChild(li);
            }
        }).catch(error => {
            return error;
        })
    });

    function deleteEntity(e) {

        let entityId = e.currentTarget.dataset.entityId;
        let li = e.currentTarget.parentNode;

        fetch(`http://localhost:3030/jsonstore/phonebook/${entityId}`, {
            method: 'DELETE'
        }).catch(error => { return error; });

        li.remove();
    }
}

attachEvents();