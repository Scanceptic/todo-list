/* 
	Expands a todo item to see full details
	This module is only to be run on todo items present on the DOM (and therefore has a classlist)
	It doesnt need to be kept between sessions therefore no storage need
*/
export default function expandTodo(item) {
	try {
		const todoItemDOM = document.getElementById(item.title.replace(" ", "-"));
		// toggle expanded on classlist
		todoItemDOM.classList.toggle("expanded");
	} catch (error) {
		console.log(error);
	}
}
