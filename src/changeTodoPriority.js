/* Change the priority value of a todo list item */
export default function changeTodoPriority(item, priority) {
	try {
		// take todo list item
		// set attribute "priority" to priority input
		item.priority = priority;
		// let another module update DOM
	} catch (error) {
		console.log(error);
	}
}
