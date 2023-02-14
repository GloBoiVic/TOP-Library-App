/* eslint-disable prefer-const */
/* eslint-disable func-names */
/* eslint-disable comma-dangle */
/* eslint-disable no-console */

let myLibrary = [];

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
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
}

const bookOne = addBookToLibrary(
  'Basic Economics',
  'Thomas Sowell',
  912,
  'reading'
);
console.log(myLibrary);
console.log(bookOne);
