import {DateTime} from './node_modules/luxon/src/luxon.js';
import Book from './modules/bookClass.js';
import { resetForm } from './modules/utils.js';

const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const timeDate = document.getElementById('time-date');

const newBook = new Book();

timeDate.innerHTML = DateTime.now().toLocaleString(DateTime.DATETIME_MED);

document.getElementById('book-list').scrollIntoView({
  behavior: 'smooth',
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.formSubmitHandler({
    title: title.value,
    author: author.value,
  });
  resetForm(title, author);
});