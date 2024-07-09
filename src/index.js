import "./style.css";
import { createTask, toggleComplete, editTask } from "./app.js";
import { renderTasks, renderProjects } from "./dom.js";
import { saveTask, loadTasks, deleteTask } from "./localStorage.js";

console.log("Link Successful");

const taskArray = [];

const createTaskButton = document.getElementById("new-task");
createTaskButton.addEventListener("click", () => {
	const taskObject = createTask(
		"Example Task" + prompt("Enter number"),
		"Use very expensive art supplies to create something worth much less",
		"24/07/2024",
		1,
		"Drawing"
	);
	// check title is unique
	// loop through current array of tasks
	for (let i = 0; i < taskArray.length; i++) {
		// if task.title === title parameter
		if (taskArray[i].title === taskObject.title) {
			// error
			console.log("Task title is not unique");
			return null;
		}
	}
	taskArray.push(taskObject);
	console.log(taskArray);
	renderTasks(taskObject.project);
});

/* 
	Tab-switching logic for going between different projects 
	Look at restaurant page for example
	Create event listener for each project button
	wipe out all the contents of div id="tasks" and then
	append all the tasks within that project
*/
