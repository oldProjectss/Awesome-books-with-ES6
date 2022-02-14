const bookList = document.querySelector('.book_list');
const addBtn = document.querySelector('.add_book_btn');

const titleInput = document.querySelector('.title');
const authorInput = document.querySelector('.author');

let books = [
  {
    author: 'ipsum',
    title: 'Testyy',
  },
  {
    author: 'lorem',
    title: 'Testeroo',
  },
];

const setLocalStore = (books) => {
  localStorage.setItem('bookStore', JSON.stringify(books));
};

const removeBook = (index) => {
  books.splice(index, 1);
  setLocalStore(books);
};

const displayBooks = () => {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const li = document.createElement('li');
    const article = document.createElement('article');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const button = document.createElement('button');

    title.className = 'book_title';
    title.textContent = book.title;
    author.className = 'book_author';
    author.textContent = book.author;
    button.className = 'remove_book_btn';
    button.textContent = 'Remove';

    article.append(title, author, button);
    li.className = 'book';
    li.appendChild(article);

    bookList.appendChild(li);

    button.addEventListener('click', () => {
      removeBook(index);
      displayBooks();
    });
  });
};

const addBook = (title, author) => {
  const book = {
    author,
    title,
  };
  books.push(book);
  displayBooks();
  setLocalStore(books);
};

addBtn.addEventListener('click', () => {
  if (titleInput.value && authorInput.value) {
    addBook(titleInput.value, authorInput.value);
    titleInput.value = '';
    authorInput.value = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('bookStore')) {
    books = JSON.parse(localStorage.getItem('bookStore'));
    displayBooks();
  } else if (books) {
    displayBooks();
  }
});

const bookListSection = document.querySelector('.book_list_section');
const AddbookSection = document.querySelector('.add_book');
const contactSection = document.querySelector('.contact_section');
const timeDisplay = document.querySelector('.time-display');

const listBtn = document.querySelector('.list');
const addNewBtn = document.querySelector('.add_new');
const contactBtn = document.querySelector('.contact');

const setTime = () => {
  const date = new Date();
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const day = date.getDate();
  let minutes = date.getMinutes();
  const hours = date.getHours();
  let seconds = date.getSeconds();

  if (seconds.toString().length < 2) {
    seconds = `0${seconds}`;
  }
  if (minutes.toString().length < 2) {
    minutes = `0${minutes}`;
  }

  const time = `${month} ${day}th ${year}, ${hours}:${minutes}:${seconds}`;
  timeDisplay.textContent = '';
  timeDisplay.textContent = `${time}`;
};

setInterval(setTime, 1000);

listBtn.addEventListener('click', () => {
  bookListSection.style.display = 'flex';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'none';
});

addNewBtn.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  AddbookSection.style.display = 'flex';
  contactSection.style.display = 'none';
});

contactBtn.addEventListener('click', () => {
  bookListSection.style.display = 'none';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'flex';
});
