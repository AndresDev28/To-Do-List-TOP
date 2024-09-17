/** Función para guardar el array de proyectos dentro del localStorage */

export function saveProjects(projects) {
  // Convertir el array de proyectos en una cadena JSON
  const projectsJSON = JSON.stringify(projects);
  // Guardar la cadena JSON en localStorage
  localStorage.setItem('projects', projectsJSON);

  console.log(localStorage);
}

export function loadProjects() {
  const projectsJSON = localStorage.getItem('projects');

  if(projectsJSON) {
    // Si hay datos almacenados, convertir el JSON a un array de objetos
    return JSON.parse(projectsJSON);
    
  } else {
    // si no hay datos almacenado devolver un array vacío o uno con un valor por defecto
    return []; // Default Project (por ejemplo)
  };
}