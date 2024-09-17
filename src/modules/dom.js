/* Funcion para agregar un proyecto al side bar */

export function addProjectToSidebar(project) {
  // 1. identificar el contenedor de proyectos
  const containerProjects = document.querySelector('.projects-container');
  // 2. Crea el nuevo elemento para el proyecto
  const projectItem = document.createElement('button');
  projectItem.classList.add('sidebar-button') // Agrega la clase para los estilos

  // 3. configurar el contenido del item
  projectItem.innerHTML = `
    <span class="icon-container icons-sidebar">
      <img class="sidebar-icon" ./assets/images/tag-icon.svg">
    </span>
    <div class="sidebar-name">
      <h2>${project.name}</h2>
    </div>
  `;
  // 4. Agregar el item al contenedor de proyectos
  containerProjects.appendChild(projectItem);

  // 5. Agregar event listener al boton del proyecto
  projectItem.addEventListener('click', () => {
    updateCurrentSelectionTitle(project.name);
  })
}

// funcion para actualizar el título 
export function updateCurrentSelectionTitle(projectName) {
  let currentSelectionTitle = document.getElementById('titleCurrentSection');
  const currentInfoText = document.querySelector('.infoText');
  currentSelectionTitle.textContent = projectName;
  currentInfoText.textContent = 'Tasks from an especific Project';
}

// funcion para limpiar el main content de tareas
export function hideTasks() {
  taskContainer.style.display = 'none';
}

// funcion para mostrar solo las tareas completadas

export function showCompletedTasks() {
  taskContainer.style.display = 'block';
  upcomingTasksContainer.style.display = 'none';
  completedTasksContainer.style.display = 'block';
}

// función para mostrar todas las tareas
export function showAllTasks() {
  taskContainer.style.display = 'block';
  upcomingTasksContainer.style.display = 'block';
  completedTasksContainer.style.display = 'block';
}

// función para mostrar solo las tareas por completar
export function showUpcomingTasks() {
  taskContainer.style.display = 'block';
  upcomingTasksContainer.style.display = 'block';
  completedTasksContainer.style.display = 'none';
}
