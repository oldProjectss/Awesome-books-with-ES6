import { displayBooks } from './DisplayBook.js';
import { setLocalStore } from './localStorage.js';
import { books } from './start.js';

const addBook = (title, author) => {
  const book = {
    author,
    title,
  };
  books.push(book);
  displayBooks();
  setLocalStore(books);
};

export default addBook;
