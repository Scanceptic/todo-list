// Takes task in object form and makes a list item for appending
export default function todoToDOM(task) {
	try {
		// create list item to attach task details to
		const taskItem = document.createElement("li");
		// add task class for styling
		taskItem.classList.add("task");
		// Add title as h3
		const title = document.createElement("h3");
		title.textContent = task.title;
		title.classList.add("title");
		// add description in smaller text underneath title
		const description = document.createElement("div");
		description.textContent = task.description;
		description.classList.add("description");
		// add priority on right top
		const priority = document.createElement("div");
		priority.textContent = `Priority: ${task.priority}`;
		priority.classList.add("priority");
		// add duedate below priority on right
		const duedate = document.createElement("div");
		duedate.textContent = `Due: ${task.duedate}`;
		duedate.classList.add("duedate");
		// dont need to know the project - only affects storage loading etc.
		// append all items
		taskItem.appendChild(title);
		taskItem.appendChild(description);
		taskItem.appendChild(priority);
		taskItem.appendChild(duedate);
		//console.log("Task Item Creation Success");
		//console.log(taskItem);
		return taskItem;
	} catch {
		console.log("Task Item Creation Failed");
	}
}