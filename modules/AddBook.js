import { displayBooks } from './DisplayBook.js';
import { setLocalStore } from './localStorage.js';
import { books } from './BookList.js';

export const addBook = (title, author) => {
  const book = {
    author,
    title,
  };
  books.push(book);
  displayBooks();
  setLocalStore(books);
};
