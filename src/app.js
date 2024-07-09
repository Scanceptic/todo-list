// Everything in app.js should work with pure JS objects - no HTML, no localStorage
// Make an empty task array on pageload?
// fill with stuff from localStorage if there is any
function createTaskArray() {
	const taskArray = [];
	return taskArray;
}

/* Creating new task objects */
// factory function for creating new task objects
// creating a task adds it to the session taskArray, and returns the taskObject as well
function createTask(title, description, dueDate, priority, project) {
	// check for acceptable parameters types and formats
	// title, description and projectname can be anything since they are stored as strings

	// priority must be number above 0
	if (typeof priority !== "number" || priority < 1) {
		console.log("Priority was not a number or was less than 1");
		return null;
	}

	// dueDate must be valid date
	// try data parsing with date module, catch return null and log error and console.log("Invalid date")

	// check title is unique
	// loop through current array of tasks
	for (let i = 0; i < taskArray.length; i++) {
		// if task.title === title parameter
		if (taskArray[i].title === title) {
			// cancel task creation and tell user
			console.log("Task title is not unique");
			return null;
		}
	}

	const taskObject = {
		title,
		description,
		dueDate,
		priority,
		project,
		completed: false,
	};

	taskArray.push(taskObject);
	return taskObject;
}

/* Setting tasks as complete */
function toggleComplete(task) {
	task.completed = !task.completed;
	return taskObject;
}
/* Editing a task */
function editTask() {}
