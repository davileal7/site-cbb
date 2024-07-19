
const openModalButton = document.getElementById('openModalButton');
const modal = document.getElementById('modal');
const closeButton = document.querySelector('.close-button');
const modalForm = document.getElementById('modalForm');

// Open Modal
openModalButton.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close Modal
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close Modal on Outside Click (Optional)
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

