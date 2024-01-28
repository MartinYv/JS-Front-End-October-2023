
let baseUrl = 'http://localhost:3030/jsonstore/tasks/';
const addButton = document.getElementById('add-vacation');
const editButton = document.getElementById('edit-vacation');
const loadButton = document.getElementById('load-vacations');

const nameInput = document.getElementById('name');
const numDaysInput = document.getElementById('num-days');
const fromDateInput = document.getElementById('from-date');

const vacationsList = document.getElementById('list'); //its not UL!!!

loadButton.addEventListener('click', loadVacations);

editButton.addEventListener('click', (e) => {

    e.preventDefault();

    let id = e.currentTarget.dataset.vacantionId;

    let vacation = {
        name: nameInput.value,
        days: numDaysInput.value,
        date: fromDateInput.value
    };

    fetch(`${baseUrl}${id}`, {
        method: 'PUT',
        body: JSON.stringify(vacation)
    }).then(loadVacations);

    editButton.disabled = true;
    addButton.disabled = false;
});

addButton.addEventListener('click', (e) => {

    e.preventDefault();

    if (!(nameInput.value == '' || numDaysInput.value == '' || fromDateInput.value == '')) {

        let vacation = {
            name: nameInput.value,
            days: numDaysInput.value,
            date: fromDateInput.value
        };

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify(vacation)
        }).then(loadVacations).then(clearInputField);


        clearInputField();
    }
})

function clearInputField() {
    nameInput.value = '';
    numDaysInput.value = '';
    fromDateInput.value = '';
}

function deleteVacantion(e) {

    fetch(`${baseUrl}${e.currentTarget.dataset.vacantionId}`, {
        method: 'DELETE'
    }).then(loadVacations);

}

function changeVacantion(e) {
    editButton.disabled = false;
    addButton.disabled = true;

    editButton.dataset.vacantionId = e.currentTarget.dataset.vacantionId;

    const div = e.currentTarget.parentNode;

    //fill input fields
    nameInput.value = div.querySelector('h2').textContent;
    const h3Collection = Array.from(div.querySelectorAll('h3'));
    numDaysInput.value = h3Collection[0].textContent;
    fromDateInput.value = h3Collection[1].textContent;
}

function loadVacations() {
    fetch(baseUrl).then(response => {
        return response.json();
    }).then(tasks => {

        vacationsList.innerHTML = '';

        for (const task of Object.values(tasks)) {

            let divContaner = document.createElement('div');
            divContaner.className = 'container';

            let h2Name = document.createElement('h2');
            let h3DaysCount = document.createElement('h3');
            let h3FromDate = document.createElement('h3');

            h2Name.textContent = task.name;
            h3DaysCount.textContent = task.days;
            h3FromDate.textContent = task.date;

            let changeButton = document.createElement('button');
            changeButton.className = 'change-btn';
            changeButton.textContent = 'Change';
            changeButton.dataset.vacantionId = task._id;
            changeButton.addEventListener('click', changeVacantion);


            let doneButton = document.createElement('button');
            doneButton.className = 'done-btn';
            doneButton.textContent = 'Done';
            doneButton.dataset.vacantionId = task._id;
            doneButton.addEventListener('click', deleteVacantion);

            divContaner.appendChild(h2Name);
            divContaner.appendChild(h3DaysCount);
            divContaner.appendChild(h3FromDate);
            divContaner.appendChild(changeButton);
            divContaner.appendChild(doneButton);

            vacationsList.appendChild(divContaner);

            editButton.disabled = true;
        }
    }).catch(error => { return error });
}