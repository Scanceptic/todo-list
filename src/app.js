/* Creating new task objects */
// factory function
function createTask(title, description, dueDate, priority, project) {
	const taskObject = { title, description, dueDate, priority, project, completed: false };
	return taskObject;
}
/* Setting tasks as complete */
function toggleComplete(task) {
    task.completed = !task.completed;
    return taskObject;
}
/* Editing a task */
function editTask() {
    
}