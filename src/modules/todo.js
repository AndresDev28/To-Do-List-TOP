// function to create a to-do

export function createTodo (title, description = '', dueDate = null, priority = '', complete = false) {
  return {
    title,
    description,
    dueDate,
    priority,
    complete,
  };
}