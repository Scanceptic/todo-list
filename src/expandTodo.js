/* 
	Expands a todo item to see full details
	This module is only to be run on todo items present on the DOM (and therefore has a classlist)

*/
export default function expandTodo(item) {
	console.log("Toggling To-do Expand Property...");
	// toggle expanded on classlist
	item.classList.toggle("expanded");
}
