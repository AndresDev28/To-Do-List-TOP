import './assets/css/normalized.css'
import './assets/css/style.css';


/** Obtener el elemento del DOM para mostrar el modal de crear nuevo proyecto */

const addPojectBtn = document.getElementById('addProjectBtn');
const showProjectModal = document.getElementById('createProjectModal');
const closeProjectModal = document.getElementById('closeBtnCreateProject');

/* Evento para mostrar el modal de crear Proyecto */
addPojectBtn.addEventListener('click', () => {
  showProjectModal.style.display = 'block';
  overlay.style.display = 'block';
});

/* Evento para ocultar el modal de crear Proyecto */

closeProjectModal.addEventListener('click', () => {
  showProjectModal.style.display = 'none';
  overlay.style.display = 'none';
})