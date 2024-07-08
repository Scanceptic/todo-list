/* Creates a Todo list item based user inputs */
/* This task item is returned in object format, and must be converted to an element for DOM */
export default function createTodo(
	title,
	description,
	duedate,
	priority,
	project
) {
	try {
		// take input values provided for the todo item
		// also has a completed property that is initially set to false
		const todoItem = {
			title,
			description,
			duedate,
			priority,
			project,
			completed: false,
		};
		return todoItem;
	} catch (error) {
		console.log(error);
	}
}
