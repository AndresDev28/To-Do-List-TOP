import './assets/css/normalized.css'
import './assets/css/style.css';
import { createProject, projectsArray } from './modules/project';
import { 
  addProjectToSidebar,
  showAllTasks, 
  showUpcomingTasks, 
  showCompletedTasks, 
  updateCurrentSelectionTitle,
  hideTasks } from './modules/dom';
import { saveProjects } from './modules/storage';
import { loadProjects } from './modules/storage';






// Cargar projectos al inicio de la aplicacion
const loadedProjects = loadProjects();

// Actualizar el contenido de projectsArray
projectsArray.splice(0, projectsArray.length, ...loadedProjects); // 0 projectsArray = [...loadedProjects];

/** Obtener elementos del DOM */

const addProjectBtn = document.getElementById('addProjectBtn');
const showProjectModal = document.getElementById('createProjectModal');
const closeProjectModal = document.getElementById('closeBtnCreateProject');
const createProjectBtn = document.getElementById('createProjectBtn');
const addNewTaskBtn = document.getElementById('addNewTaskBtn');
const addNewTaskCloseBtn = document.getElementById('closeBtnAddNewTask');
const allTasksBtn = document.getElementById('all-tasks');
const defaultProjectBtn = document.getElementById('default-project');
const upcomingTaksBtn = document.getElementById('upcoming-tasks');
const completedTaksBtn = document.getElementById('completed');

/* Evento para mostrar el modal de crear Proyecto */
addProjectBtn.addEventListener('click', () => {
  showProjectModal.style.display = 'block';
  overlay.style.display = 'block';
});

/* Evento para ocultar el modal de crear Proyecto */

closeProjectModal.addEventListener('click', () => {
  showProjectModal.style.display = 'none';
  overlay.style.display = 'none';
})

/* Evento para crear el Proyecto */ 

createProjectBtn.addEventListener('click', (event) => {
  event.preventDefault();

  const projectName = document.getElementById('projectNameInput').value;

  // Crea el nuevo proyecto
  const newProject = createProject(projectName);
  // Agregar el proyecto al array
  projectsArray.push(newProject);
  // Actualizar la interfaz de la UI
  addProjectToSidebar(newProject);
  // Guardar en localStorage
  saveProjects(projectsArray);
// Ocultar el modal createProject y el overlay
  showProjectModal.style.display = 'none';
  overlay.style.display = 'none';
  // Limpiar la entrada del input
  document.getElementById('projectNameInput').value = '';

  hideTasks();
})

/* Evento para mostrar el modal 'Add new task' */
addNewTaskBtn.addEventListener('click', () => {
  addNewTaskModal.style.display = 'block';
  overlay.style.display = 'block';
})

/* Evento para ocultar el modal 'Add new task' */
addNewTaskCloseBtn.addEventListener('click', () => {
  addNewTaskModal.style.display = 'none';
  overlay.style.display = 'none';
})

/* Evento para actualizar el display de 'All Tasks' al clicar botón 'All Tasks'*/
allTasksBtn.addEventListener('click', () => {
  updateCurrentSelectionTitle('All Tasks');
  const currentInfoText = document.querySelector('.infoText');
  currentInfoText.textContent = ('Find all of your tasks from every project');
  showAllTasks();
})

/* Evento para mosrtrar solo las tareas por completar */ 
upcomingTaksBtn.addEventListener('click', () => {
  updateCurrentSelectionTitle('Upcoming Tasks');
  showUpcomingTasks();
})

/* Evento para mostrar solo las tareas completadas */
completedTaksBtn.addEventListener('click', () => {
  updateCurrentSelectionTitle('Completed Tasks');
  showCompletedTasks();
})

/* Evento para actualizar el display de 'Default Project' al clicar el botón 'Default Project' */
defaultProjectBtn.addEventListener('click', () => {
  updateCurrentSelectionTitle('Default Project');
})

