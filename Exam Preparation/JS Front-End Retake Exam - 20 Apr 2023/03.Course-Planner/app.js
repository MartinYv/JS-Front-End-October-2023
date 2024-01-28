const baseUrl = `http://localhost:3030/jsonstore/tasks/`;

let courseNameInput = document.getElementById('course-name');
let courseTypeInput = document.getElementById('course-type');
let courseDescriptionInput = document.getElementById('description');
let teacherNameInput = document.getElementById('teacher-name');

const loadButton = document.getElementById('load-course');
loadButton.addEventListener('click', loadCourses);

const formAddButton = document.getElementById('add-course');
formAddButton.addEventListener('click', addCourse);

const formEditButton = document.getElementById('edit-course');
formEditButton.addEventListener('click', editCourse);

function editCourse(e) {

    e.preventDefault();
    const courseID = e.currentTarget.dataset.courseId;

    let course = {
        title: courseNameInput.value,
        type: courseTypeInput.value,
        teacher: teacherNameInput.value,
        description: courseDescriptionInput.value,
        _id: courseID
    };


    if (course.title != "" && course.type != '' && course.teacher != '' && course.description != '') {
        if (course.type == 'Long' || course.type == 'Medium' || course.type == "Short") {
            fetch(`${baseUrl}${courseID}`, {
                method: 'PUT',
                body: JSON.stringify(course)
            }).then(loadCourses);
        }
    }
}


const coursesContainer = document.getElementById('list');//to append the courses here

function addCourse(e) {
    e.preventDefault();

    let course = {
        title: courseNameInput.value,
        type: courseTypeInput.value,
        teacher: teacherNameInput.value,
        description: courseDescriptionInput.value
    };

    if (course.title != "" && course.type != '' && course.teacher != '' && course.description != '') {
        if (course.type == 'Long' || course.type == 'Medium' || course.type == "Short") {

            fetch(`http://localhost:3030/jsonstore/tasks/`, {
                method: 'POST',
                body: JSON.stringify(course)
            }).then(clearInputFields).then(loadCourses);
        }
    }

}


function loadCourses() {

    coursesContainer.innerHTML = '';

    fetch(`http://localhost:3030/jsonstore/tasks/`).then(response => {
        return response.json();
    }).then(courses => {
        //     <!-- <div class="container">
        //     <h2>JS Back-End</h2>                                                                                 
        //     <h3>John Brown</h3>
        //     <h3>Long</h3>
        //     <h4>JS Back-end responsible for managing the interchange of data between the server
        //         and the users</h4>
        //     <button class="edit-btn">Edit Course</button>
        //     <button class="finish-btn">Finish Course</button>
        // </div> -->


        for (const course of Object.values(courses)) {

            let divCourse = document.createElement('div');
            divCourse.className = 'container';

            let h2Title = document.createElement('h2');
            h2Title.textContent = course.title;


            let h3teacherName = document.createElement('h3');
            h3teacherName.textContent = course.teacher;

            let h3Type = document.createElement('h3');
            h3Type.textContent = course.type;

            let h4Description = document.createElement('h4');
            h4Description.textContent = course.description;

            let editButton = document.createElement('button');
            editButton.textContent = 'Edit Course';
            editButton.className = 'edit-btn';

            editButton.dataset.courseId = course._id;
            editButton.addEventListener('click', prepareForEditCourse);


            let finishCourseButton = document.createElement('button');
            finishCourseButton.className = 'finish-btn';
            finishCourseButton.textContent = 'Finish Course'
            finishCourseButton.dataset.courseId = course._id;
            
            finishCourseButton.addEventListener('click', deleteCourse);

            divCourse.appendChild(h2Title);
            divCourse.appendChild(h3teacherName);
            divCourse.appendChild(h3Type);
            divCourse.appendChild(h4Description);

            divCourse.appendChild(editButton);
            divCourse.appendChild(finishCourseButton);

            coursesContainer.appendChild(divCourse);
        }
    })
}

function deleteCourse(e) {
    const courseID = e.currentTarget.dataset.courseId;
    fetch(`${baseUrl}${courseID}`, {
        method: 'DELETE',
    }).then(loadCourses);
}

function prepareForEditCourse(e) {
    e.preventDefault();
    let course = e.currentTarget.parentNode;

    const courseNameTextContent = course.querySelector('h2').textContent;
    const [teacherName, type] = course.querySelectorAll('h3');
    const description = course.querySelector('h4');

    courseNameInput.value = courseNameTextContent;
    courseTypeInput.value = type.textContent;
    courseDescriptionInput.value = description.textContent;
    teacherNameInput.value = teacherName.textContent;


    formEditButton.disabled = false;
    formEditButton.dataset.courseId = e.currentTarget.dataset.courseId;
    formAddButton.disabled = true;
    // course.remove();
}



function clearInputFields() {
    courseNameInput.value = '';
    courseTypeInput.value = '';
    courseDescriptionInput.value = '';
    teacherNameInput.value = '';
}
