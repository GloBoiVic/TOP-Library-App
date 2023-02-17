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

  // Loop over the library array and display to the table
  myLibrary.forEach((library) => {});
}

// Add form inputs to array
const submitBtn = document.querySelector('#add-btn');
submitBtn.addEventListener('click', getFormData);

function getFormData() {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#read-status').value;
  console.log(title, author, pages, read);

  // AddLibrary function take add input data to array
  addBookToLibrary(title, author, pages, read);

  // Clear out from after
  document.querySelector('#myform').reset();
}
getFormData();
