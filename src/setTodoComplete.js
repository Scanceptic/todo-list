import loadFromStorage from "./loadFromStorage.js";
import saveToStorage from "./saveToStorage.js";

/* Set a todo list item's status as completed */
// Only run on elements in the DOM
// local storage needs to know if it is completed to track between sessions
export default function setTodoComplete(item) {
	try {
		const todoItem = loadFromStorage(item);
		console.log(todoItem);
		const todoItemDOM = document.getElementById(
			todoItem.title.replace(" ", "-")
		);
		//console.log("Toggling To-do Complete...");
		// if it has prop completed remove, else add
		if (todoItemDOM.classList.contains("completed") === true) {
			// update DOM (classlist.remove completed)
			todoItemDOM.classList.remove("completed");
			// update storage (get storage object, set completed prop to false, save to storage)
			todoItem.completed = false;
		} else if (todoItemDOM.classList.contains("completed") === false) {
			// update DOM (classlist.add completed)
			todoItemDOM.classList.add("completed");
			// update storage (get storage object, set completed prop to true, save to storage)
			todoItem.completed = true;
		}
	} catch (error) {
		console.log(error);
	}
}
/*  
	This should run if a button is clicked
	it should set a property on the object to true
	this should update the DOM (by adding class "completed")
	this should also be saved to storage
*/
