// takes in formatted task element ready for DOM appending
export default function appendTodo(task) {
	try {
		const tasklist = document.getElementById("tasks");
		tasklist.appendChild(task);
	} catch (error) {
		console.log(error);
	}
}
