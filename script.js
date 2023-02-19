/* eslint-disable no-use-before-define */
/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

// Get and display modal information
const modalBtn = document.querySelector('.modal-btn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close-btn');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Start Library Logic
let myLibrary = [];

// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Display books to page
function displayBooks() {
  // const libraryEl = document.querySelector('.library-books');
  const table = document.querySelector('table');
  const tblBody = document.querySelector('tbody');
  // Loop over the library array and display to the table
  myLibrary.forEach((library) => {
    console.log(library.title);
    const tblRow = document.createElement('tr');

    const tblCell1 = document.createElement('td');
    tblCell1.textContent = library.title;
    tblRow.appendChild(tblCell1);

    const tblCell2 = document.createElement('td');
    tblCell2.textContent = library.author;
    tblRow.appendChild(tblCell2);

    const tblCell3 = document.createElement('td');
    tblCell3.textContent = library.pages;
    tblRow.appendChild(tblCell3);

    const tblCell4 = document.createElement('td');
    tblCell4.textContent = library.read;
    tblRow.appendChild(tblCell4);

    tblBody.appendChild(tblRow);
    table.appendChild(tblBody);

    modal.style.display = 'none';
  });
}

function addBookToLibrary() {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#read-status').value;

  // Break out of form if empty
  if (title === '' || author === '' || pages === '') {
    modal.style.display = 'none';
  } else {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    console.log(newBook);
    displayBooks();
  }
}
// Add form inputs to array
const form = document.querySelector('#myform');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  // Clear out form after
  form.reset();
});

// function getFormData(e) {
//   const title = document.querySelector('#book-title').value;
//   const author = document.querySelector('#book-author').value;
//   const pages = document.querySelector('#book-pages').value;
//   const read = document.querySelector('#read-status').value;
//   console.log(title, author, pages, read);

//   // Break out of form if empty
//   if (title === '' || author === '' || pages === '') {
//     return;
//   }

//   // Prevent default submit behavior
//   e.preventDefault();

//   // AddLibrary function take add input data to array
//   addBookToLibrary(title, author, pages, read);

//   // Clear out form after
//   document.querySelector('#myform').reset();
// }
