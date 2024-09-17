// Array para almacenar los proyectos
export let projectsArray = [];

// function to create a new project
export function createProject(projectName) {
  return {
    name: projectName,
    tasks: []
  };
}

// function to add a task to the project
export function addTaskToProject (project, newTask) {
  project.tasks.push(newTask);
}