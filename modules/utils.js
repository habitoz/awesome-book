const resetForm = (...elements) => {
  elements.forEach((elem) => {
    elem.value = '';
  });
};

const createBookList = (text, removeCb) => {
  const bookElement = document.createElement('div');
  const bookInfo = document.createElement('p');
  const removeButton = document.createElement('button');
  bookElement.classList.add('book-element');
  bookInfo.innerHTML = text;
  removeButton.innerHTML = 'remove';
  removeButton.classList.add('remove-btn');
  removeButton.addEventListener('click', removeCb);
  bookElement.appendChild(bookInfo);
  bookElement.appendChild(removeButton);
  return bookElement;
};

export {
  resetForm,
  createBookList,
};