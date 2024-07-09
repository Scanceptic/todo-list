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

	createTaskButton.addEventListener("click", () => {
		const taskObject = createTask(
			"Example Task" + prompt("Enter number"),
			"Use very expensive art supplies to create something worth much less",
			"24/07/2024",
			1,
			"Drawing"
		);
		// render tasks for inputted project
		renderTasks(taskObject.project);
	});
} catch (error) {
	console.log(error);
}

/* 
	Tab-switching logic for going between different projects 
	Look at restaurant page for example
	Create event listener for each project button
	wipe out all the contents of div id="tasks" and then
	append all the tasks within that project
*/
