import setLocalStore from './localStorage.js';
import { Books } from './start.js';

const removeBook = (index) => {
  Books.books.splice(index, 1);
  setLocalStore(Books.books);
};

export default removeBook;
