import "./style.css";
import {
	createTask,
	createProject,
	toggleComplete,
	editTask,
	loadStorage,
} from "./app.js";
import "./dom.js";
import "./localStorage.js";

console.log("Link Successful");

createTask(
	"Draw a Pretty Picture",
	"Use very expensive art supplies to create something worth much less",
	"24/07/2024",
	1,
	"Drawing"
);

/* 
	Tab-switching logic for going between different projects 
	Look at restaurant page for example
	Create event listener for each project button
	wipe out all the contents of div id="tasks" and then
	append all the tasks within that project
*/
