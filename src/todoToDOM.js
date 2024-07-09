import setTodoComplete from "./setTodoComplete.js";
import expandTodo from "./expandTodo.js";

// Takes task in object form and returns a list item ready for appending
export default function todoToDOM(task) {
	try {
		// create item to attach task details to
		const taskItem = document.createElement("div");
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
		// add completed button
		const completed = document.createElement("button");
		completed.textContent = "Mark Completed";
		completed.addEventListener("click", () => {
			setTodoComplete(task);
		});
		// add extended button
		const extended = document.createElement("button");
		extended.textContent = "Extend";
		extended.addEventListener("click", () => {
			expandTodo(task);
		});
		// add unique id
		taskItem.id = task.title.replace(" ", "-");
		// dont need to know the project - only affects storage loading etc.
		// append all items
		taskItem.appendChild(title);
		taskItem.appendChild(description);
		taskItem.appendChild(priority);
		taskItem.appendChild(duedate);
		taskItem.appendChild(completed);
		taskItem.appendChild(extended);
		return taskItem;
	} catch (error) {
		console.log(error);
	}
}
