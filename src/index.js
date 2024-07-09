import "./style.css";
import {
	createTask,
	toggleComplete,
	editTask,
	getTaskArray,
	createTaskArray,
} from "./app.js";
import { renderTasks, renderProjects } from "./dom.js";
import { saveTask, loadTasks, deleteTask } from "./localStorage.js";

try {
	const taskArray = createTaskArray();
	renderProjects(taskArray);
	renderTasks(taskArray, "default-project");
} catch (error) {
	console.log(error);
}

try {
	const createTaskButton = document.getElementById("new-task");
} catch (error) {
	console.log(error);
}
createTaskButton.addEventListener("click", () => {
	try {
		const taskObject = createTask(
			"Example Task" + prompt("Enter number"),
			"Use very expensive art supplies to create something worth much less",
			"24/07/2024",
			1,
			"Drawing"
		);
		// check title is unique
		// loop through current array of tasks
		console.log(getTaskArray().length);
		for (let i = 0; i < getTaskArray().length; i++) {
			// if task.title === title parameter
			if (getTaskArray()[i].title === taskObject.title) {
				// error
				console.log("Task title is not unique");
				return null;
			}
		}
		getTaskArray(taskObject);
		console.log(taskArray);
		renderTasks(taskObject.project);
	} catch (error) {
		console.log(error);
	}
});

/* 
	Tab-switching logic for going between different projects 
	Look at restaurant page for example
	Create event listener for each project button
	wipe out all the contents of div id="tasks" and then
	append all the tasks within that project
*/
