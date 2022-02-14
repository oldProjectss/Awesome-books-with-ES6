import displayBooks from './DisplayBook.js';

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

function start() {
  if (localStorage.getItem('bookStore')) {
    books = JSON.parse(localStorage.getItem('bookStore'));
    displayBooks();
  } else if (books) {
    displayBooks();
  }
}

export default start;
