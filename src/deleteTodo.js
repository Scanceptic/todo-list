/* Delete a selected todo item */
export default function deleteTodo(element) {
	try {
		// item has to be present on the DOM to be selected for deletion
		// remove from DOM
		element.remove();
		// get storage
		// remove element from storage
		// save storage
	} catch (error) {
		console.log(error);
	}
}
