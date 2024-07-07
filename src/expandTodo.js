/* 
	Expands a todo item to see full details
	This module is only to be run on todo items present on the DOM (and therefore has a classlist)

*/
export default function expandTodo(element) {
	console.log("Toggling To-do Expand Property...");
	// toggle expanded on classlist
	element.classList.toggle("expanded");
}
