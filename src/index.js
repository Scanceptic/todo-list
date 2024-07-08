import "./style.css";
import createTodo from "./createTodo.js";
import changeTodoPriority from "./changeTodoPriority.js";
import deleteTodo from "./deleteTodo.js";
import expandTodo from "./expandTodo.js";
import setTodoComplete from "./setTodoComplete.js";
import home from "./home.js";
import projects from "./projects.js";

/* DOM-Related Stuff */
// Takes task in object form and makes a list item for appending
function taskToDOM(task) {
	try {
		// create list item to attach task details to
		const taskItem = document.createElement("li");
		// add task class for styling
		taskItem.classList.add("task");
		// Add title as h3
		const title = document.createElement("h3");
		title.textContent = task.title;
		// add description in smaller text underneath title
		const description = document.createElement("div");
		description.textContent = task.description;
		// add priority on right top
		const priority = document.createElement("div");
		priority.textContent = task.priority;
		// add duedate below priority on right
		const duedate = document.createElement("div");
		duedate.textContent = task.duedate;
		// dont need to know the project - only affects storage loading etc.
		// append all items
		taskItem.appendChild(title);
		taskItem.appendChild(description);
		taskItem.appendChild(priority);
		taskItem.appendChild(duedate);
		console.log("Task Item Creation Success");
		console.log(taskItem);
		return taskItem;
	} catch {
		console.log("Task Item Creation Failed");
	}
}
// takes in formatted task element ready for DOM appending
function appendTask(task) {
	try {
		const tasklist = document.getElementById("tasks");
		tasklist.appendChild(task);
		console.log("Task Item Append Success");
	} catch {
		console.log("Task Item Append Failed");
	}
}
/* Demo inputs (defaults) */
appendTask(
	taskToDOM(
		createTodo(
			"Iron laundry",
			"Iron all the leftover stuff from yesterday",
			"24//07/2024",
			1,
			1
		)
	)
);

/* Tests */
/* 
	function testLog() {
		console.log("Successful Link");
	}

	testLog();

	const testTodoItem = createTodo(
		"Iron Laundry",
		"Iron the rest of the laundry leftover from yesterday",
		"24/07/2024",
		1,
		1
	);
	console.log(testTodoItem);
	changeTodoPriority(testTodoItem, 2);
	console.log(testTodoItem);
	const tasks = document.getElementById("tasks");
	const testItem = document.createElement("li");
	testItem.textContent = "Task X";
	testItem.classList.add("task");
	tasks.appendChild(testItem);
	expandTodo(testItem);
	console.log(testItem.classList);
	expandTodo(testItem);
	setTodoComplete(testItem);
	console.log(testItem.classList);
	setTodoComplete(testItem);
	deleteTodo(testItem);
*/
