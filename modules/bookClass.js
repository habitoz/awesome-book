import { createBookList } from './utils.js';

const booksContainer = document.getElementById('booksContainer');

class Book {
  constructor() {
    this.books = [];
    this.getBooksFromStorage();
    this.bookId = this.books.length;
  }

  saveToLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeAllBooks(book) {
    booksContainer.innerHTML = '';
    this.books = this.books.filter((item) => item.id !== book.id);
    this.createBookList();
    this.saveToLocalStorage();
  }

  createBookList() {
    this.books.forEach((book) => {
      const bookElement = createBookList(`"${book.title}" by ${book.author}`, () => this.removeAllBooks(book));
      booksContainer.appendChild(bookElement);
    });
  }

  formSubmitHandler(data) {
    data.id = this.bookId;
    this.books.push(data);
    this.bookId += 1;
    booksContainer.innerHTML = '';
    this.createBookList();
    this.saveToLocalStorage();
  }

  getBooksFromStorage() {
    const savedItem = localStorage.getItem('books');
    if (savedItem) {
      this.books = JSON.parse(savedItem);
      this.createBookList();
    }
  }
}

export default Book;