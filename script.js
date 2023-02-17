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
  // this.info = function () {
  //   return `${title} by ${author}, ${pages} pages, ${read}`;
  // };
}

function addBookToLibrary(title, author, pages, read) {
  let books = new Book(title, author, pages, read);
  myLibrary.push(books);
}

/* const bookOne = addBookToLibrary(
    'Basic Economics',
    'Thomas Sowell',
    912,
    'reading'
    );
    const bookTwo = addBookToLibrary(
      'Basic Economics',
      'Thomas Sowell',
      912,
      'reading'
      ); */

// Display books to page
function displayBooks() {
  const books = document.querySelector('.books');
  const tables = document.querySelector('table');
  const tblHead = document.querySelector('thead');
  const tblBody = document.querySelector('tbody');
  console.log(tables, tblHead, tblBody);

  // Loop over the library array and display to the table
  myLibrary.forEach((library) => {
    const tblRow = document.createElement('tr');
    const cell = document.createElement('td');
    tblHead.appendChild(tblRow);
    tblBody.appendChild(cell);

    for (let key in library) {
      console.log(`${key}: ${library}`);
    }
  });
}

displayBooks();

// Add form inputs to array
const submitBtn = document.querySelector('#add-btn');
submitBtn.addEventListener('click', getFormData, false);

function getFormData(e) {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#read-status').value;
  console.log(title, author, pages, read);

  // Break out of form if empty
  if (title === '' || author === '' || pages === '') {
    return;
  }

  // Prevent default submit behavior
  e.preventDefault();

  // AddLibrary function take add input data to array
  addBookToLibrary(title, author, pages, read);

  // Clear out from after
  document.querySelector('#myform').reset();
}
