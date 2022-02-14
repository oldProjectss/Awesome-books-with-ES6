import displayBooks from './DisplayBook.js';
import setLocalStore from './localStorage.js';
import { Books } from './start.js';

const addBook = (title, author) => {
  const book = {
    author,
    title,
  };
  Books.books.push(book);
  displayBooks();
  setLocalStore(Books.books);
};

export default addBook;
