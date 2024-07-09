import { loadTasks, saveTask } from "./localStorage.js";

// Everything in app.js should work with pure JS objects - no HTML, no localStorage
/* Creating new task objects */
// factory function for creating new task objects
// creating a task returns the taskObject
export function createTask(title, description, dueDate, priority, project) {
	try {
		console.log("Creating task...");
		// check for acceptable parameters types and formats
		// title, description and projectname can be anything since they are stored as strings

		// is title unique?
		// check taskarray?
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
			toggleComplete: function (task) {
				try {
					console.log("Toggling task complete...");
					task.completed = !task.completed;
					return taskObject;
				} catch (error) {
					console.log(error);
				}
			},
			editTask: function () {
				try {
					console.log("Editing task...");
				} catch (error) {
					console.log(error);
				}
			},
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
		console.log("Creating taskArray...");
		const loadedTasks = loadTasks();
		if (loadedTasks === false) {
			console.log("Creating default task...");
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
		console.log("Loaded tasks");
		return taskArray;
	} catch (error) {
		console.log(error);
	}
}
