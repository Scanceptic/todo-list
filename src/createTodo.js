/* Creates a Todo list item based user inputs */
export default function createTodo(
	title,
	description,
	dueDate,
	priority,
	project
) {
	console.log("Creating todo...");
	// take input values provided for the todo item
	// if values not provided for a parameter, use a default value instead
	// create JSON formatted object that can be stored in local storage
	const todoItem = {
		title,
		description,
		dueDate,
		priority,
		project,
	};
	// return completed item
	return todoItem;
	// another module can store it in local storage under the inputted project parent
	// no DOM necessary as only storage needs to be changed
}
