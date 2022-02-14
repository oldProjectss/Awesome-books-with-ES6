const addBtn = document.querySelector('.add_book_btn');

const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
    addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }
});
