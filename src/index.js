import './assets/css/style.css';
import './assets/css/normalized.css'
import { createProject } from './modules/project.js';
import { showNewProjectForm } from './modules/dom.js';

const newProjectBtn = document.getElementById('new-project-btn')

newProjectBtn.addEventListener('click', () => {
  showNewProjectForm();
});
