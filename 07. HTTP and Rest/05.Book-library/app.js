function attachEvents() {
  document.getElementById('loadBooks').addEventListener('click', getAllBooks);

  // to change form button actions, should choose between add and edit
  document.querySelector('#form button').addEventListener('click', actionDirect);

  function getAllBooks() {

    fetch(`http://localhost:3030/jsonstore/collections/books`).then(response => {

      if (!response.ok) {
        throw console.log('Invalid request!');
      }

      return response.json();

    }).then(books => {

      if (books.lenght <= 0) {
        return console.log('No books!');
      }

      for (const book in books) {

        let bookAuthor = books[book].author;
        let bookTitle = books[book].title;

        //to append the data in tbody
        let tBody = document.querySelector('tbody');

        //to append tdBook and tdAuthor here
        let row = document.createElement('tr');

        let tdTitle = document.createElement('td');
        let tdAuthor = document.createElement('td');

        tdAuthor.textContent = bookAuthor;
        tdTitle.textContent = bookTitle;

        row.appendChild(tdTitle);
        row.appendChild(tdAuthor);

        // to append the buttons here
        let tdButtons = document.createElement('td');

        let editButton = document.createElement('button');
        editButton.addEventListener('click', editBook);
        editButton.textContent = 'Edit';
        editButton.dataset.bookId = book; // attaching the id of the book to the edit button

        let deleteButton = document.createElement('button');
        deleteButton.addEventListener('click', deleteBook);
        deleteButton.textContent = 'Delete';
        deleteButton.dataset.bookId = book; // attaching the id of the book to the edit button

        tdButtons.appendChild(editButton);
        tdButtons.appendChild(deleteButton);

        row.appendChild(tdButtons);

        tBody.appendChild(row);
      }
    });

  }

  function addBook() {

    let title = document.querySelector('#form input[name="title"]').value;
    let author = document.querySelector('#form input[name="author"]').value;

    if (title && author) {

      // let book = {
      //   title: title,
      //   author: author
      // };

      fetch(`http://localhost:3030/jsonstore/collections/books`, {
        method: "POST",
        body: JSON.stringify({ author, title })
      });
    }

  }

  function editBook(e) {

    document.querySelector('#form h3').textContent = 'Edit FORM';
    document.querySelector('#form button').textContent = 'Save';

    let bookTitle = e.currentTarget.parentNode.parentNode.cells[0].textContent;
    let bookAuthor = e.currentTarget.parentNode.parentNode.cells[1].textContent;

    document.querySelector('#form input[name="title"]').value = bookTitle;
    document.querySelector('#form input[name="author"]').value = bookAuthor;

    const bookId = e.currentTarget.dataset.bookId; // recieving the bookId

    document.querySelector('#form button').setAttribute('data-bookId', bookId); //setting attribute to the button, after click the button is the event, in the event is the attribute with the ID of the book
  }

  function updateBook(e) {

    let bookId = e.currentTarget.dataset.bookid;

    let title = document.querySelector('#form input[name="title"]').value;
    let author = document.querySelector('#form input[name="author"]').value;

    fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
      method: 'PUT',
      body: JSON.stringify({ author, title })
    });

  }

  function deleteBook(e) {
    const bookId = e.currentTarget.dataset.bookId;

    fetch(`http://localhost:3030/jsonstore/collections/books/${bookId}`, {
      method: 'DELETE',
      body: null
    });

  }

  function actionDirect(e) {

    let formType = document.querySelector('#form h3');

    formType.textContent == 'FORM' ? addBook(e) : updateBook(e);

    formType.textContent = 'FORM';
    document.querySelector('#form button').textContent = 'Submit';
  }

}

attachEvents();