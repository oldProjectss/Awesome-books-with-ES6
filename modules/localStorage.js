const setLocalStore = (books) => {
  localStorage.setItem('bookStore', JSON.stringify(books));
};

export default setLocalStore;
