// function to create a new project

export function createProject(projectName) {
  return {
    name: projectName,
    tasks: []
  };
}