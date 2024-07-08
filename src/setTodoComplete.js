/* Set a todo list item's status as completed */
// Only run on elements in the DOM
// FIX: local storage needs to know if it is completed to track between sessions
export default function setTodoComplete(item) {
	//console.log("Toggling To-do Complete...");
	// toggle completed on classlist
	item.classList.toggle("completed");
}
