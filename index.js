import { start } from './modules/start.js';
import { listButton, addButton, contactButton } from './modules/DisplaySections.js';
import { input } from './modules/input.js';

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
