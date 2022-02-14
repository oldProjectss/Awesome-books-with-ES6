class Books {
  books = [
    {
      author: 'ipsum',
      title: 'Testyy',
    },
    {
      author: 'lorem',
      title: 'Testeroo',
    },
  ];
}

function start() {
  if (localStorage.getItem('bookStore')) {
    Books.books = JSON.parse(localStorage.getItem('bookStore'));
    // displayBooks();
  } else if (Books.books) {
    // displayBooks();
  }
}

export { Books, start };
