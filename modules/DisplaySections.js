const bookListSection = document.querySelector('.book_list_section');
const AddbookSection = document.querySelector('.add_book');
const contactSection = document.querySelector('.contact_section');

export function listButton() {
  bookListSection.style.display = 'flex';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'none';
}

export function addButton() {
  bookListSection.style.display = 'none';
  AddbookSection.style.display = 'flex';
  contactSection.style.display = 'none';
}

export function contactButton() {
  bookListSection.style.display = 'none';
  AddbookSection.style.display = 'none';
  contactSection.style.display = 'flex';
}
