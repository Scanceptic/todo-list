/* Set a todo list item's status as completed */
export default function setTodoComplete(item) {
	console.log("Toggling To-do Complete...");
	// toggle completed on classlist
	item.classList.toggle("completed");
}
