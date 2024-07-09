import "./style.css";
import { createTask, createTaskArray } from "./app.js";
import { renderTasks, renderProjects } from "./dom.js";
import { saveTask } from "./localStorage.js";

const taskArray = createTaskArray();
const projectNames = renderProjects(taskArray);
renderTasks(taskArray, projectNames[0]);

const createTaskButton = document.getElementById("new-task");

createTaskButton.addEventListener("click", () => {
	try {
		const taskObject = createTask(
			prompt("Enter task title:"),
			prompt("Enter task description:"),
			prompt("Enter task date:"),
			parseInt(prompt("Enter task priority:")),
			prompt("Enter project name for this task:")
		);
		if (taskObject !== null) {
			// push task to task array
			taskArray.push(taskObject);
			// save new task to localStorage
			saveTask(taskObject);
			// render projects
			renderProjects(taskArray);
			// render tasks for inputted project
			renderTasks(taskArray, taskObject.project);
		} else {
			console.log("Task creation failed");
		}
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
