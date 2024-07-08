/* 
	Expands a todo item to see full details
	This module is only to be run on todo items present on the DOM (and therefore has a classlist)
	It doesnt need to be kept between sessions therefore no storage need
*/
export default function expandTodo(item) {
	try {
		// toggle expanded on classlist
		item.classList.toggle("expanded");
	} catch (error) {
		console.log(error);
	}
}
