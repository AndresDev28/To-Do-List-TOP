// Project Manager module

const ProjectManager = (() => {
  // Inicializamos el array de proyectos con uno por defecto
  let projects = [{
    name: 'Default',
    todos: []
  }];

  // Función para obtener todos los proyectos
  const getProjects = () => (projects);

  // función para agregar un proyecto nuevo
  const addProject = (name) => {
    projects.push({name, todos: []});
  };

  // Buscar un proyecto por su nombre
  const getProject = (name) => projects.find(project => project.name === name);
  
  // Agregar una tarea a un proyecto específico
  const addTodoToProject = (projectName, todo) => {
    const project = getProject(projectName);
    if(project) {
      project.todos.push(todo);
    }
  };

  // Eliminar una tarea de un proyecto específico
  const deleteTodoFromProject = (projectName, todoIndex) => {
    const project = getProject(projectName);
    if(project) {
      project.todos.splice(todoIndex, 1);
    }
  };

  // Exportamos las funciones que queremos que estén fuera del módulo
  return {
    getProjects,
    addProject,
    getProject,
    addTodoToProject,
    deleteTodoFromProject
  };
})();

export default ProjectManager;