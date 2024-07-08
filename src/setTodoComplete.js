/* Set a todo list item's status as completed */
// Only run on elements in the DOM
// FIX: local storage needs to know if it is completed to track between sessions
export default function setTodoComplete(item) {
	//console.log("Toggling To-do Complete...");
	// toggle completed on classlist
	item.classList.toggle("completed");
}
/*  
	This should run if a button is clicked
	it should set a property on the object to true
	this should update the DOM (by adding class "completed")
	this should also be saved to storage
*/