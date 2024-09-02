import { createProject } from "./project.js";

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

    const projectName = projectNameInput.value;

    // Create project
    const newProject = createProject(projectName);

    // Create project container
    const projectContainer = createProjectContainer(projectName);

    // Add the project container to the DOM
    const project = document.getElementById('project');
    project.style.display = 'block';
    project.appendChild(projectContainer);

    //Close the form after create the project
    formContainer.removeChild(newProjectForm);
  });
}

// Function to create Project Container
export function createProjectContainer (projectName) {
  const projectDiv = document.createElement('div');
  
  const projectTitle = document.createElement('h2');
  projectTitle.classList.add('project-title');
  projectTitle.textContent = projectName;
  projectDiv.appendChild(projectTitle);

  const addTaskBtn = document.createElement('button');
  addTaskBtn.classList.add('add-task-btn');
  addTaskBtn.textContent = 'Add a task';
  projectDiv.appendChild(addTaskBtn);

  return projectDiv;
}

// Function to toggle of the button 'Start a New Project'
export function toggleOffStartBtn() {
  const startButtonContainer = document.getElementById('start-btn');
  startButtonContainer.style.display = 'none';
}