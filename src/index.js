import './assets/css/style.css';
import './assets/css/normalized.css'
import ProjectManager from './modules/project.js';

console.log(ProjectManager.getProjects());
console.log(ProjectManager.addProject("Work"));
const todo = { title: 'Finish report', description: 'Complete the financial report by Friday' };
ProjectManager.addTodoToProject('Work', todo);
console.log(ProjectManager.getProject('Work'));

ProjectManager.deleteTodoFromProject('Work', 0);
console.log(ProjectManager.getProjects('Work'));

