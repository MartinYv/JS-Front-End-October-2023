window.addEventListener("load", solve);

function solve() {

  const nameInput = document.getElementById('player');
  const scoreInput = document.getElementById('score');
  const roundInput = document.getElementById('round');

  let addButton = document.getElementById('add-btn');
  addButton.addEventListener('click', addPlayer);

  let clearButton = document.querySelector('.clear');
  clearButton.addEventListener('click', () => { location.reload() });

  let sureList = document.getElementById('sure-list');
  let scoreboardList = document.getElementById('scoreboard-list');

  function addPlayer(e) {

    e.preventDefault();

    if (nameInput.value != '' && nameInput.value != '', scoreInput.value != '') {

      let li = document.createElement('li');
      li.className = 'dart-item';

      let article = document.createElement('article');

      let pName = document.createElement('p');
      pName.textContent = nameInput.value;

      let pScore = document.createElement('p');
      pScore.textContent = `Score: ${scoreInput.value}`;

      let pRound = document.createElement('p');
      pRound.textContent = `Round: ${roundInput.value}`;

      let editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.classList.add('btn', 'edit');
      editButton.addEventListener('click', editPlayer);

      let okButton = document.createElement('button');
      okButton.textContent = 'Ok';
      okButton.classList.add('btn', 'ok');
      okButton.addEventListener('click', moveToScoreboard)

      li.appendChild(article);

      article.appendChild(pName);
      article.appendChild(pScore);
      article.appendChild(pRound);

      li.appendChild(editButton);
      li.appendChild(okButton);

      sureList.appendChild(li);

      clearInputFields();

      addButton.disabled = true;

    }
  }

  function editPlayer(e) {

    let paragraphs = e.currentTarget.parentNode.querySelectorAll('article p');

    let name = paragraphs[0].textContent;
    let score = paragraphs[1].textContent.split(': ')[1];
    let round = paragraphs[2].textContent.split(': ')[1];

    nameInput.value = name;
    scoreInput.value = score;
    roundInput.value = round;

    e.currentTarget.parentNode.remove();
    addButton.disabled = false;
  }

  function clearInputFields() {
    nameInput.value = '';
    scoreInput.value = '';
    roundInput.value = '';
  }

  function moveToScoreboard(e) {

    let element = e.currentTarget.parentNode;

    let buttons = element.querySelectorAll('button');

    buttons.forEach(btn => {
      btn.remove();
    });

    scoreboardList.appendChild(element);

    addButton.disabled = false;
  }
}
