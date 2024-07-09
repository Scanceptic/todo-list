import { loadTasks } from "./localStorage.js";

// Everything in app.js should work with pure JS objects - no HTML, no localStorage
/* Creating new task objects */
// factory function for creating new task objects
// creating a task returns the taskObject
export function createTask(title, description, dueDate, priority, project) {
	try {
		// check for acceptable parameters types and formats
		// title, description and projectname can be anything since they are stored as strings

		// priority must be number above 0
		if (typeof priority !== "number" || priority < 1) {
			console.log("Priority was not a number or was less than 1");
			return null;
		}

		// dueDate must be valid date
		// try data parsing with date module, catch return null and log error and console.log("Invalid date")

		const taskObject = {
			title,
			description,
			dueDate,
			priority,
			project,
			completed: false,
		};

		return taskObject;
	} catch (error) {
		console.log(error);
	}
}

export function createTaskArray() {
	
}

// add task to memory, or just get an array of the tasks in memory
export function getTaskArray(task) {
	try {
		// if no tasks in array, get the tasks from localStorage
		if (typeof taskArray === "undefined") {
			console.log("taskArray is undefined - loading from localStorage");
			// load from localstorage
			const taskArray = loadTasks();
		}
		if (task) {
			taskArray.push(task);
		}
		console.log(`before returning, taskArray is: ${taskArray}`);
		return taskArray;
	} catch (error) {
		console.log(error);
	}
}

/* Setting tasks as complete */
export function toggleComplete(task) {
	task.completed = !task.completed;
	return taskObject;
}
/* Editing a task */
export function editTask() {}
