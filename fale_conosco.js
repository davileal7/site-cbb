
const openModalButton = document.getElementById('openModalButton');
const openModalButton_cadastro = document.getElementById('openModalButton_cadastro');
const modal = document.getElementById('modal');
const modal_cadastro = document.getElementById('modal_cadastro');
const closeButton = document.querySelector('.close-button');
const closeButton_cadastro = document.querySelector('.close-button_cadastro');
const modalForm = document.getElementById('modalForm');
const modalForm_cadastro = document.getElementById('modalForm_cadastro');

// Open Modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});
// Open Modal
openModalButton_cadastro.addEventListener('click', () => {
  modal_cadastro.style.display = 'block';
});

// Close Modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});
closeButton_cadastro.addEventListener('click', () => {
  modal_cadastro.style.display = 'none';
});

// Close Modal on Outside Click (Optional)
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});



