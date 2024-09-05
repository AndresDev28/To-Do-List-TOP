import { createProject } from "./project.js";
import { createTodo } from "./todo.js";
import { addTaskToProject } from "./project.js";
import { projects } from "../index.js";

// function to show a form of the new project request

export function showNewProjectForm() {
  const newProjectForm = document.createElement('form');

  const projectNameInput = document.createElement('input');
  projectNameInput.type = 'text';
  projectNameInput.id = 'project-name';
  projectNameInput.placeholder = 'Project name...';
  projectNameInput.required = true;

  newProjectForm.appendChild(projectNameInput);

  const createProjectBtn = document.createElement('button');
  createProjectBtn.type = 'submit';
  createProjectBtn.classList.add('create-project-btn');
  createProjectBtn.id = 'createProjectBtn';
  createProjectBtn.textContent = 'Create project';
  newProjectForm.appendChild(createProjectBtn);

  
  // Add the form to the DOM
  const formContainer = document.getElementById('form-container');
  formContainer.appendChild(newProjectForm);

  // Manejar el evento de submit del formulario (aquí obtendrás el nombre del proyecto)
  newProjectForm.addEventListener('submit', (event) =>{
    event.preventDefault(); // Prevent reloading the page

    // Obtenemos el nombre del proyecto ingresado por el usuario
    const projectName = projectNameInput.value;

    // Creamos el objeto del proyecto usando la funcion createProject de project.js
    const newProject = createProject(projectName);

    // Agregamosel proyecto al array de project en el index.js
    projects.push(newProject);

    // Creamos el contenedor del proyecto en el DOM usando la función createProjectContainer
    const projectContainer = createProjectContainer(projectName);

    // Asociamos el contenedor con el proyecto usando un data atribute
    projectContainer.dataset.projectIndex = projects.length - 1;

    // Add the project container to the DOM
    const project = document.getElementById('project');
    project.style.display = 'block';
    project.appendChild(projectContainer);

    //Close the form after create the project
    formContainer.removeChild(newProjectForm);
  });
}

// Function to create Project Container
export function createProjectContainer (projectName, projectIndex) {
  const projectDiv = document.createElement('div');
  projectDiv.classList.add('project-container');
  // Asociamos el índice del proyecto al contenedor
  projectDiv.dataset.projectIndex = projectIndex;
  
  const projectTitle = document.createElement('h2');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectName;
  projectDiv.appendChild(projectTitle);

  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('add-task-btn');
  addTaskBtn.textContent = 'Add a task';
  projectDiv.appendChild(addTaskBtn);

  addTaskBtn.addEventListener('click', () => {
    // Obtener el contenedor del objeto al que pertenece el botón
    const projectContainer = addTaskBtn.closest('.project-container');

    // Obtener el índice del proyecto desde el data atribute
    const projectIndex = projectContainer.dataset.projectIndex;

    // Obtener el proyecto acutal del array
    const currentProject = projects[projectIndex];

    // Mostrar el formulario de creacion de tarea, pasando el contenedor del pryecto y proyecto actual
    showCreateTaskFrom(projectContainer, currentProject);
  });

  return projectDiv;
}

// Function to toggle of the button 'Start a New Project'
export function toggleOffStartBtn() {
  const startButtonContainer = document.getElementById('start-btn');
  startButtonContainer.style.display = 'none';
}

// Function to create a new task form and add it into the Project Container

export function showCreateTaskFrom(projectContainer, project) {
  const taskForm = document.createElement('form');
  taskForm.classList.add('task-form');
  // Title input
  const taskTitleInput = document.createElement('input');
  taskTitleInput.id = 'taskTitle';
  taskTitleInput.type = 'text';
  taskTitleInput.placeholder = 'Title';
  taskTitleInput.required = true;
  taskForm.appendChild(taskTitleInput);
  // Description input
  const taskDescriptionInput = document.createElement('input');
  taskDescriptionInput.id = 'taskDescription';
  taskDescriptionInput.type = 'text';
  taskDescriptionInput.placeholder = 'Description';
  taskForm.appendChild(taskDescriptionInput);
  // dueDate (Calendar)
  const taskDueDateLabel = document.createElement('label');
  taskDueDateLabel.textContent = 'Due Date: ';
  taskForm.appendChild(taskDueDateLabel);

  const taskDueDate = document.createElement('input')
  taskDueDate.id = 'taskDueDate';
  taskDueDate.type = 'date';
  taskForm.appendChild(taskDueDate);
  // Priority input
  const taskPriority = document.createElement('input');
  taskPriority.id = 'taskPriority';
  taskPriority.type = 'text';
  taskPriority.placeholder = 'priority';
  taskForm.appendChild(taskPriority);
  // Complete (checkbox)
  const completeLabel = document.createElement('label');
  completeLabel.textContent = 'Completed:';
  taskForm.appendChild(completeLabel);

  const taskCompleteInput = document.createElement('input');
  taskCompleteInput.id = 'taskComplete';
  taskCompleteInput.type = 'checkbox';
  taskForm.appendChild(taskCompleteInput);
  // Button create task
  const createTaskBtn = document.createElement('button');
  createTaskBtn.id = 'createTaskBtn';
  createTaskBtn.type = 'submit';
  createTaskBtn.textContent = 'Create task';
  taskForm.appendChild(createTaskBtn);

  // Add the form to the Project Container
  projectContainer.appendChild(taskForm);

  // Handle the submit event form
  taskForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the inputs values
    const title = document.getElementById('taskTitle').value;
    const description = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('taskDueDate').value;
    const priority = document.getElementById('taskPriority').value;
    const isComplete = taskCompleteInput.checked;

    // Create todo using function createTodo from todo.js
    const newTask = createTodo(title, description, dueDate, priority, isComplete);

    // Agregar la tarea la proyecto correspondiente (usando el argumento project)
    addTaskToProject(project, newTask);

    // Actualizar la UI para mostrar la nueva tarea
    updateTaskList(project); // Tambien pasamos el proyecto aquí

    // Remove the form after the task was created
    taskForm.style.display = 'none';
  });
}

export function updateTaskList(project) {
  // Getting Task Project Container (using an especific project id)

  const taskListContainer = document.getElementById(`taskList-${project.name}`);

  //Limpiar el contenedor de las tareas
  taskListContainer.innerHTML = '';

  // Iterar sobre las tareas del proyecto y crear elementos para mostrarlas
  project.tasks.forEach(task => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    // Asignar un ID único a cada tarea
    taskItem.id = `task-${task.id}`; // Asegurarme de que cada tarea tenga un ID único para que funcione

    // Agregar título, descripción, etc. de la tarea al taskItem
    const taskTitleElement = document.createElement('h3');
    taskTitleElement.textContent = task.title;
    taskItem.appendChild(taskTitleElement);

    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.textContent = task.description;
    taskItem.appendChild(taskDescriptionElement);

    const taskDueDateElement = document.createElement('input');
    taskDueDateElement.type = 'date';
    taskDueDateElement.value = task.dueDate ? task.dueDate.toISOString().split('T')[0] : ''; // Formatear la fecha si es necesario
    taskItem.appendChild(taskDueDateElement);

    const taskPriorityElement = document.createElement('p');
    taskPriorityElement.textContent = task.priority;
    taskItem.appendChild(taskPriorityElement);

    const taskCompletedElement = document.createElement('input');
    taskCompletedElement.type = 'checkbox';
    taskCompletedElement.checked = task.completed; // Marcar como cheked si la tarea está completada

    // Agregar un event listener para manejar los cmabios en el checkbox
    taskCompletedElement.addEventListener('change', () => {
      // Actualiza la propiedad 'completed' de la tarea
      task.completed = taskCompletedElement.checked;

      // Guardar los cambios en localStorage (o donde estés almacenando los datos)
      // saveProjectToLocalStorage();... (lógica para actualizar los datos en localStorage)

      // Actualizar la interfaz de usuario para reflejar el cambio (opcional)
      // updateTaskItemAppearance... (tachar el texto de la tarea si está completada, por ejemplo)
    });

    taskItem.appendChild(taskCompletedElement);
    taskListContainer.appendChild(taskItem);
  });
}