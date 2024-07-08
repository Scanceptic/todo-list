// Everything in app.js should work with pure JS objects - no HTML, no localStorage

/* Creating new task objects */
// factory function
function createTask(title, description, dueDate, priority, project) {
	const taskObject = {
		title,
		description,
		dueDate,
		priority,
		project,
		completed: false,
	};
	return taskObject;
}

/* Create new project */
function createProject(name, colour) {
	const project = {
		name,
		colour,
	};
    return project;
}

/* Setting tasks as complete */
function toggleComplete(task) {
	task.completed = !task.completed;
	return taskObject;
}
/* Editing a task */
function editTask() {}

/* Load from localStorage on page load */
function loadStorage() {}
