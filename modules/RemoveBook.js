import { setLocalStore } from './localStorage.js';
import { books } from './BookList.js';

export const removeBook = (index) => {
  books.splice(index, 1);
  setLocalStore(books);
};
