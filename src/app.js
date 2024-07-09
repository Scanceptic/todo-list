import { loadTasks, saveTask } from "./localStorage.js";

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

/* 
	Run on pageload
	Get tasks from localStorage
	If no tasks in localStorage
	Create example task
*/
export function createTaskArray() {
	try {
		console.log("Loading taskArray...");
		const loadedTasks = loadTasks();
		if (loadedTasks === false) {
			console.log("No tasks in localStorage...");
			const taskObject = createTask(
				"Example Task",
				"An example of a task created since none were found in localStorage",
				"24/07/2024",
				1,
				"default-project"
			);
			console.log("Saving task to localStorage...");
			saveTask(taskObject);
		}
		// load tasks to taskArray
		const taskArray = loadedTasks;
		console.log("taskArray is:");
		console.log(taskArray);
		return taskArray;
	} catch (error) {
		console.log(error);
	}
}

// get an array of the tasks in memory
export function getTaskArray(task) {
	try {
		// if a task parameter is provided push to memory
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
	try {
		task.completed = !task.completed;
		return taskObject;
	} catch (error) {
		console.log(error);
	}
}
/* Editing a task */
export function editTask() {
	try {
	} catch (error) {
		console.log(error);
	}
}
