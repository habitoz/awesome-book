import Book from './modules/bookClass.js';
import { resetForm } from './modules/utils.js';

const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');

const newBook = new Book();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.formSubmitHandler({
    title: title.value,
    author: author.value,
  });
  resetForm(title, author);
});