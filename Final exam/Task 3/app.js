let baseURL = `http://localhost:3030/jsonstore/tasks/`;

let mealsList = document.getElementById('list');

let inputFoodName = document.getElementById('food');
let inputTime = document.getElementById('time');
let inputCalories = document.getElementById('calories');

let addMealFormButton = document.getElementById('add-meal');
addMealFormButton.addEventListener('click', addMeal);

let editMealFormButton = document.getElementById('edit-meal');
editMealFormButton.addEventListener('click', editMeal);

let loadButton = document.getElementById('load-meals');
loadButton.addEventListener('click', loadMeals);

function loadMeals() {

    fetch(baseURL).then(response => {
        return response.json();
    }).then(meals => {

        mealsList.innerHTML = '';

        for (const meal of Object.values(meals)) {

            let div = document.createElement('div');
            div.className = 'meal';

            let h2FoodName = document.createElement('h2');
            h2FoodName.textContent = meal.food;

            let h3Calories = document.createElement('h3');
            h3Calories.textContent = meal.calories;

            let h3Time = document.createElement('h3');
            h3Time.textContent = meal.time;

            let divButtons = document.createElement('div');
            divButtons.setAttribute('id', 'meal-buttons')

            let changeButton = document.createElement('button');
            changeButton.className = 'change-meal';
            changeButton.textContent = 'Change'
            changeButton.dataset.mealId = meal._id;
            changeButton.addEventListener('click', prepareForEdit);

            let deleteButton = document.createElement('button');
            deleteButton.className = 'delete-meal';
            deleteButton.textContent = 'Delete';
            deleteButton.dataset.mealId = meal._id;

            deleteButton.addEventListener('click', deleteMeal);

            div.appendChild(h2FoodName);
            div.appendChild(h3Calories);
            div.appendChild(h3Time);
            div.appendChild(divButtons);

            divButtons.appendChild(changeButton);
            divButtons.appendChild(deleteButton);

            mealsList.appendChild(div);
        }
    })
}

function addMeal(e) {
    e.preventDefault();

    if (inputFoodName.value != '' && inputCalories.value != '' && inputTime.value != '') {

        let meal = {
            food: inputFoodName.value,
            calories: inputCalories.value,
            time: inputTime.value
        };

        fetch(baseURL, {
            method: 'POST',
            body: JSON.stringify(meal)
        });

        loadMeals();
        clearInputFields();
    }
}

function prepareForEdit(e) {

    let mealElement = e.currentTarget.parentNode.parentNode;

    let mealFoodName = mealElement.querySelector('h2').textContent;

    let mealCaloriesAndTime = mealElement.querySelectorAll('h3');
    let mealCalories = mealCaloriesAndTime[0].textContent;
    let mealTime = mealCaloriesAndTime[1].textContent;

    inputFoodName.value = mealFoodName;
    inputCalories.value = mealCalories;
    inputTime.value = mealTime;

    addMealFormButton.disabled = true;
    editMealFormButton.dataset.mealId = e.currentTarget.dataset.mealId;

    editMealFormButton.disabled = false;

    mealElement.remove();
}

function editMeal(e) {

    let mealId = e.currentTarget.dataset.mealId;

    if (inputFoodName.value != '' && inputCalories.value != '' && inputTime.value != '') {

        let meal = {
            food: inputFoodName.value,
            calories: inputCalories.value,
            time: inputTime.value,
            _id: mealId
        };


        fetch(`${baseURL}${mealId}`, {
            method: 'PUT',
            body: JSON.stringify(meal)
        });

        loadMeals();
        clearInputFields();
    }
}

function deleteMeal(e) {

    let mealId = e.currentTarget.dataset.mealId;

    fetch(`${baseURL}${mealId}`, {
        method: 'DELETE'
    });

    loadMeals();
}


function clearInputFields() {
    inputFoodName.value = '';
    inputCalories.value = '';
    inputTime.value = '';
}