function attachEvents() {

  let tbody = document.querySelector('#results tbody');

  let inputFirsName = document.querySelector('input[name="firstName"]');
  let inputLastName = document.querySelector('input[name="lastName"]');
  let inputFacultyNumber = document.querySelector('input[name="facultyNumber"]');
  let inputGrade = document.querySelector('input[name="grade"]');

  window.addEventListener("load", () => {

    fetch(`http://localhost:3030/jsonstore/collections/students`).then(response => {
      return response.json();
    }).then(students => {

      for (const student of Object.entries(students)) {

        const [firstName, lastName, facultyNumber, grade] = Object.entries(student[1]);

        let tr = document.createElement('tr');

        tbody.appendChild(tr);

        let tdFirstName = document.createElement('td');
        tdFirstName.textContent = firstName[1];
        tr.appendChild(tdFirstName);

        let tdlastName = document.createElement('td');
        tdlastName.textContent = lastName[1];
        tr.appendChild(tdlastName);

        let tdfacultyNumber = document.createElement('td');
        tdfacultyNumber.textContent = facultyNumber[1];
        tr.appendChild(tdfacultyNumber);

        let tdgrade = document.createElement('td');
        tdgrade.textContent = grade[1];
        tr.appendChild(tdgrade);
      }
    })
  });

  document.getElementById('submit').addEventListener('click', () => {

    let student = {
      firstName: inputFirsName.value,
      lastName: inputLastName.value,
      facultyNumber: inputFacultyNumber.value,
      grade: inputGrade.value
    };

    fetch(`http://localhost:3030/jsonstore/collections/students`, {
      method: 'POST',
      body: JSON.stringify(student)
    })
  });

}

attachEvents();