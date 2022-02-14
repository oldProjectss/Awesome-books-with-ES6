// import { books } from './BookList.js';

export const setLocalStore = (books) => {
  localStorage.setItem('bookStore', JSON.stringify(books));
};
