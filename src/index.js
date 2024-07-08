import "./style.css";
import pageload from "./pageload.js";
import saveToStorage from "./saveToStorage.js";
import updateTodo from "./updateTodo.js";
import createTodo from "./createTodo.js";
import updateSidebar from "./updateSidebar.js";

// add event listeners to new task button
const newTaskBtn = document.getElementById("newtask");
newTaskBtn.addEventListener("click", () => {
	try {
		let title = prompt("Enter task title:");
		let desc = prompt("Enter description:");
		let due = prompt("Enter due date:");
		let priority = prompt("Enter priority:");
		let project = prompt("Enter project title:");

		const todoItem = createTodo(title, desc, due, priority, project);
		saveToStorage(project, todoItem);
		updateSidebar();
		updateTodo(project);
	} catch (error) {
		console.log(error);
	}
});

// make a new default project if none in storage
pageload();
// update todo list based on project first in storage array
updateTodo(localStorage.key(0));
// update sidebar
updateSidebar();
