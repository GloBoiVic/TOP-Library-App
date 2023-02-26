/* eslint-disable no-undef */
/* eslint-disable no-restricted-syntax */
/* eslint-disable max-len */
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

Book.prototype.toggleRead = function () {
  this.read = this.read === 'Read' ? 'Unread' : 'Read';
};

// Get form info from the DOM and push book to library array
function addBookToLibrary() {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#book-author').value;
  const pages = document.querySelector('#book-pages').value;
  const read = document.querySelector('#read-status').value;
  const errorMsg = document.querySelector('.error-msg');

  // Break out of form if empty
  if (title === '' || author === '' || pages === '') {
    errorMsg.textContent = 'Please fill out all fields';
  } else {
    const newBook = new Book(title, author, pages, read);
    newBook.toggleRead();
    myLibrary.push(newBook);
    displayBooks();
    errorMsg.textContent = '';

    // Clear out input everytime modal pops up
    form.reset();
  }
}

// Add form inputs to array
const form = document.querySelector('#myform');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
});

function displayBooks() {
  const table = document.querySelector('table');
  const tblBody = document.querySelector('tbody');

  // Clear existing books from the page
  tblBody.innerHTML = '';

  // Loop over the library array and append each book to the table
  myLibrary.forEach((book, index) => {
    tblBody.appendChild(renderBook(book, index));
  });

  table.appendChild(tblBody);

  // Goes back to the home screen after each successful add
  modal.style.display = 'none';
}

function renderBook(book, index) {
  const tblRow = document.createElement('tr');
  tblRow.dataset.delete = 'removebooks';

  let tblCell1 = document.createElement('td');
  tblCell1.textContent = book.title;
  tblRow.appendChild(tblCell1);

  const tblCell2 = document.createElement('td');
  tblCell2.textContent = book.author;
  tblRow.appendChild(tblCell2);

  const tblCell3 = document.createElement('td');
  tblCell3.textContent = book.pages;
  tblRow.appendChild(tblCell3);

  const tblCell4 = document.createElement('td');
  const readBtn = document.createElement('button');
  readBtn.textContent = book.read;
  readBtn.classList.add('read-btn');
  readBtn.addEventListener('click', () => {
    book.toggleRead();
    readBtn.textContent = book.read;
  });
  tblCell4.appendChild(readBtn);
  tblRow.appendChild(tblCell4);

  const tblCell5 = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.value = index;
  deleteBtn.addEventListener('click', removeBook);
  tblCell5.appendChild(deleteBtn);
  tblRow.appendChild(tblCell5);

  return tblRow;
}

// Adds default books to the page
function addDefaultBooks() {
  const book1 = new Book('Think and Grow Rich', 'Napoleon Hill', 397, 'Unread');
  const book2 = new Book('Basic Economics', 'Thomas Sowell', 920, 'Read');
  myLibrary.push(book1, book2);
}

// Call addDefaultBooks before displaying books
addDefaultBooks();
displayBooks();

// Function to remove book when delete btn is clicked
function removeBook(event) {
  const tblBody = document.querySelector('tbody');
  const libraryList = tblBody.children;
  const index = Array.from(libraryList).indexOf(
    event.target.parentNode.parentNode
  );
  tblBody.removeChild(libraryList[index]);
  myLibrary.splice(index, 1);
}
