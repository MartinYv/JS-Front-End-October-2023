window.addEventListener('load', solve);

function solve() {
    
    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let selectLabel = document.querySelector('#label');
    let points = document.getElementById('points');
    let assignee = document.getElementById('assignee');

  let inputHidden = document.getElementById('task-id');

    let createTaskButton = document.getElementById('create-task-btn');
    let deleteTaskButton = document.getElementById('delete-task-btn');

    let articlesCount = document.querySelectorAll('article').length;


    createTaskButton.addEventListener('click', () => {
    
   if(!(title.value != '' || description.value != '' || points.value != '' || assignee.value != '' || selectLabel.value != '')) return;

    let taskSection = document.getElementById('tasks-section');
    // debugger
    // inputHidden.textContent = `task-${articlesCount += Number(1)}`;

    let article = document.createElement('article');
    article.setAttribute('id', `task-${articlesCount += Number(1)}`);
    article.className = 'task-card';
    taskSection.appendChild(article);

    let div = document.createElement('div');
    div.classList.add('task-card-label');
    div.classList.add('future'); // maybe should add space becouse they are 2 classes!!!
    div.innerHTML = `${selectLabel.value} ${pickIcon(selectLabel.value)}`;
    article.appendChild(div);

    let h3Title = document.createElement('h3');
    h3Title.textContent = title.value;
    h3Title.className = 'task-card-title';
    article.appendChild(h3Title);

    let pDescription = document.createElement('p');
    pDescription.className = 'task-card-desctiption';
    pDescription.textContent = description.value;
    article.appendChild(pDescription);

    let divPoints = document.createElement('div');
    divPoints.className = 'task-card-points';
    divPoints.textContent = points.value;
    article.appendChild(divPoints);

    let divAssignee = document.createElement('div');
    divAssignee.className = 'task-card-assignee';
    divAssignee.textContent = assignee.value;
    article.appendChild(divAssignee);

    let divButtons = document.createElement('div');
    divButtons.className = 'task-card-actions';
    article.appendChild(divButtons);

    let deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    divButtons.appendChild(deleteButton);
    deleteButton.addEventListener('click', (e) => {

        createTaskButton.disabled = true;
        deleteTaskButton.disabled = false;

        let articleToDeleteId = article.getAttribute('id');
        
        deleteTaskButton.dataset.id = articleToDeleteId;
        
        title.value = article.querySelector('h3').textContent;
        description.value = article.querySelector('.task-card-desctiption').innerHTML;
        assignee.value = article.querySelector('.task-card-assignee').innerHTML;
        points.value = article.querySelector('.task-card-points').innerHTML;

        title.disabled = true;
        description.disabled = true;
        selectLabel.disabled = true;
        assignee.disabled = true;
        points.disabled = true;
    });

    title.value = '';
    description.value = '';
    selectLabel.value = '';
    points.value = '';
    assignee.value = '';
   })

   deleteTaskButton.addEventListener('click', (e) =>{
        let articleToDelete = document.querySelector(`#${e.currentTarget.dataset.id}`);
        articleToDelete.remove();
   })

    function pickIcon(value){
        switch(value){
            case 'Feature': return '&#8865;';
            case 'Low Priority Bug': return '&#9737;';
            case 'High Priority Bug': return '&#9888;';
        }
    }
}