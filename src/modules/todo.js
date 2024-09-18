/* Función para crear una tarea */

export function createTodo (title, description = '', dueDate = null, priority = '', complete = false) {
  return {
    title,
    description,
    dueDate,
    priority,
    complete,
  };
}

export function getTasksByProject(projectId) { // Esta función recibirá el ID del proyecto seleccionado y devolverá un array con las tareas de ese proyecto. Puedes obtener las tareas del array projectsArray en project.js y filtrarlas según el projectId.

} 

export function filterTaskByStatus(task, status) { // Esta función recibirá un array de tareas y un estado ('completed' o 'upcoming') y devolverá un nuevo array con las tareas que coincidan con el estado especificado.

}

export function createTaskElement(task) { // Esta función recibirá un objeto de tarea y creará el elemento HTML correspondiente para mostrarlo en la interfaz de usuario. Puedes utilizar template literals o document.createElement para generar el HTML de la tarea, incluyendo el título, la fecha de vencimiento, la prioridad, etc.

}

/* Función para darle dinamismo al calendario */

export function generateCalendar(year, month) {
  const calendarBody = document.getElementById('calendarBody');
  calendarBody.innerHTML = ''; // limpiamos el contenido anterior

  const today = new Date(); // Obtiene la fecha actual
  const firstDayOfMonth = new Date(year, month, 1); // Obtiene la fecha del primer día del mes especificado
  const nameMonth = firstDayOfMonth.toLocaleString('default', { month: 'long' }); // Obtener el nombre del mes
  const lastDayOfMonth = new Date(year, month + 1, 0); // Obtiene la fecha del primer día del mes especificado
  const daysInMonth = lastDayOfMonth.getDate(); // Obtiene el número de días del mes especificado

  const firstDayIndex = firstDayOfMonth.getDate(); // Obtiene el índice del día de la semana. 0 (Domingo) 6 (Sábado)

  // Actualizamos el nombre del mes especificado
  const currentMonthElement = document.getElementById('currentMonth');
  currentMonthElement.textContent = `${nameMonth} ${year}`;

  // Crear la primera fila de semana del mes
  let currentRow = document.createElement('tr');
  calendarBody.appendChild(currentRow);

  let dayCount = 0; // Contador para llevar el seguimiento de las celdas en la fila acutal

  // Crear celdas vacías para los días anteriores al primer día del mes
  for ( let i = 0; i < firstDayIndex; i++) {
    const emptyCell = document.createElement('td');
    emptyCell.classList.add('other-month');
    currentRow.appendChild(emptyCell);
    dayCount++;
  }

  // Crear celdas para los días del mes
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const cell = document.createElement('td');
    cell.textContent = day;
    cell.dataset.date = date.toISOString().slice(0, 10); // Guarda la fecha en formato YYYY-MM-DD

    if (date.getMonth() === month) {
      cell.classList.add('current-month');

      if (date.toDateString() === today.toDateString()) {
        cell.classList.add('today');
      }
    } else {
      cell.classList.add('other-month');
    }

    currentRow.appendChild(cell);
    dayCount++;

    // Si hemos agregado 7 celdas a la fila actual agrega una fila nueva
    if (dayCount === 7) {
      currentRow = document.createElement('tr');
      calendarBody.appendChild(currentRow);
      dayCount = 0;
    }
  }
}