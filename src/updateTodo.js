import appendTodo from "./appendTodo.js";
import createTodo from "./createTodo.js";
import todoToDOM from "./todoToDOM.js";

export default function updateTodo(projectName) {
	try {
		// get todo list DOM
		const todo = document.getElementById("tasks");
		// clear todo list DOM
		while (todo.firstChild) {
			todo.remove(todo.firstChild);
		}
		// select inputted project in storage and parse
		const tasks = JSON.parse(localStorage.getItem(projectName));
		console.log(tasks);
		// loop through tasks list and append to todo
		for (let i = 0; i < tasks.length; i++) {
			// make task from object
			const todoItem = createTodo(tasks[i]);
			console.log(todoItem);
			// convert object to DOM
			const todoItemDOM = todoToDOM(todoItem);
			console.log(todoItemDOM);
			// append task to todo list
			appendTodo(todoItemDOM);
		}
	} catch (error) {
		console.log(error);
	}
}
