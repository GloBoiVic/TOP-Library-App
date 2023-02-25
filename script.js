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
    // modal.style.display = 'none';
  } else {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    displayBooks();
    errorMsg.textContent = '';
  }
}

// Add form inputs to array
const form = document.querySelector('#myform');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addBookToLibrary();
  // Clear existing values in array everytime form submits
  myLibrary = [];
  // Clear out form everytime modal pops up
  form.reset();
});

// Display books in table format
function displayBooks() {
  const table = document.querySelector('table');
  const tblBody = document.querySelector('tbody');
  // Loop over the library array and display to the table
  myLibrary.forEach((library) => {
    console.log(library.title);
    const tblRow = document.createElement('tr');
    tblRow.dataset.delete = 'removebooks';

    let tblCell1 = document.createElement('td');
    tblCell1.textContent = library.title;
    tblRow.appendChild(tblCell1);

    const tblCell2 = document.createElement('td');
    tblCell2.textContent = library.author;
    tblRow.appendChild(tblCell2);

    const tblCell3 = document.createElement('td');
    tblCell3.textContent = library.pages;
    tblRow.appendChild(tblCell3);

    const tblCell4 = document.createElement('td');
    const readBtn = document.createElement('button');
    readBtn.textContent = library.read;
    readBtn.classList.add('read-btn');
    tblCell4.appendChild(readBtn);
    tblRow.appendChild(tblCell4);

    const tblCell5 = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', removeBook);
    tblCell5.appendChild(deleteBtn);
    tblRow.appendChild(tblCell5);

    tblBody.appendChild(tblRow);
    table.appendChild(tblBody);

    // Goes back to the home screen after each successful add
    modal.style.display = 'none';
  });
}

// Function to remove book when delete btn is clicked
function removeBook() {
  const tblBody = document.querySelector('tbody');
  const libraryList = tblBody.children;
  for (list of libraryList) {
    if (list.hasAttribute('data-delete')) {
      list.remove();
    }
  }
}

// If I loop through through html collections using this method, it deletes all the book instead of 1
/* function removeBook() {
  const tblBody = document.querySelector('tbody');
  const libraryList = tblBody.children;
  console.log(libraryList);
  Array.from(libraryList).forEach((list, index) => {
    if (list.hasAttribute('data-delete')) {
      list.remove(index);
    }
  });
} */
