window.addEventListener("load", solve);

const studenNameInput = document.getElementById('student');
const universityNameInput = document.getElementById('university');
const scoreInput = document.getElementById('score');
const studentsList = document.getElementById('preview-list');
const candidatesList = document.getElementById('candidates-list');
const nextButton = document.getElementById('next-btn');

function solve() {

  nextButton.addEventListener('click', () => {

    if (studenNameInput.value != '' && universityNameInput.value != '' && scoreInput != '') {

      let liApplication = document.createElement('li');
      liApplication.className = 'application';

      let article = document.createElement('article');

      let h4StudentName = document.createElement('h4');
      h4StudentName.textContent = studenNameInput.value;

      let pUniversity = document.createElement('p');
      pUniversity.textContent = `University: ${universityNameInput.value}`;

      let pScore = document.createElement('p');
      pScore.textContent = `Score: ${scoreInput.value}`;

      let buttonEdit = document.createElement('button');
      buttonEdit.textContent = 'edit';
      buttonEdit.classList.add('action-btn');
      buttonEdit.classList.add('edit');
      buttonEdit.addEventListener('click', editStudentInfo);

      let buttonApply = document.createElement('button');
      buttonApply.textContent = 'apply';
      buttonApply.classList.add('action-btn');
      buttonApply.classList.add('apply');
      buttonApply.addEventListener('click', applyScholarship);

      liApplication.appendChild(article);

      article.appendChild(h4StudentName);
      article.appendChild(pUniversity);
      article.appendChild(pScore);
      liApplication.appendChild(buttonEdit);
      liApplication.appendChild(buttonApply);

      studentsList.appendChild(liApplication);

      nextButton.disabled = true;

      clearInputFields();
    }
  })

  function editStudentInfo() {
    let studentName = studentsList.querySelector('li h4').textContent;

    let universityNameandScore = studentsList.querySelectorAll('li p');

    let universityName = universityNameandScore[0].textContent.split(': ')[1];
    let universityScore = universityNameandScore[1].textContent.split(': ')[1];

    studenNameInput.value = studentName;
    universityNameInput.value = universityName;
    scoreInput.value = universityScore;

    studentsList.querySelector('li').remove();

    nextButton.disabled = false;
  }

  function applyScholarship() {
    let student = document.querySelector('li');

    student.querySelector('button').remove();
    student.querySelector('button').remove();

    candidatesList.appendChild(student);

    // studentsList.querySelector('li').remove(); its not nessesary, it moves the element from one list to another!
  }

  function clearInputFields() {
    studenNameInput.value = '';
    universityNameInput.value = '';
    scoreInput.value = '';
  }
}