// takes in formatted task element ready for DOM appending
export default function appendTodo(task) {
	try {
		const tasklist = document.getElementById("tasks");
		tasklist.appendChild(task);
		//console.log("Task Item Append Success");
	} catch {
		console.log("Task Item Append Failed");
	}
}