// import { books } from './BookList.js';
import { displayBooks } from './DisplayBook.js';

export let books = [
  {
    author: 'ipsum',
    title: 'Testyy',
  },
  {
    author: 'lorem',
    title: 'Testeroo',
  },
];

export function start() {
  if (localStorage.getItem('bookStore')) {
    books = JSON.parse(localStorage.getItem('bookStore'));
    displayBooks();
  } else if (books) {
    displayBooks();
  }
}
