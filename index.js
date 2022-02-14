import { start } from './modules/start.js';
import { listButton, addButton, contactButton } from './modules/DisplaySections.js';
import { input } from './modules/input.js';
import { DateTime } from './node_modules/luxon/build/es6/luxon.js';

const addBtn = document.querySelector('.add_book_btn');
const listBtn = document.querySelector('.list');
const addNewBtn = document.querySelector('.add_new');
const contactBtn = document.querySelector('.contact');

addBtn.addEventListener('click', () => {
  input();
});

document.addEventListener('DOMContentLoaded', () => {
  start();
});

listBtn.addEventListener('click', () => {
  listButton();
});

addNewBtn.addEventListener('click', () => {
  addButton();
});

contactBtn.addEventListener('click', () => {
  contactButton();
});

// toDo
const timeDisplay = document.querySelector('.time-display');

const setTime = () => {
  const time = DateTime.now();
  timeDisplay.textContent = '';
  timeDisplay.textContent = `${time.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS)}`;
};

setInterval(setTime, 1000);
