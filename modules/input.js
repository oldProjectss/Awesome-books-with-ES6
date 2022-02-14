import { addBook } from './AddBook.js';

const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

export function input() {
  if (titleInput.value && authorInput.value) {
    addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }
}
