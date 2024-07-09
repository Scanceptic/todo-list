/* This is where all the DOM-related stuff is kept */

/* 
    Render Tasks to DOM
    Requires parameter to determine which tasks to render
    Called after:
        Task is created
        Page is loaded
        Project button is clicked
        Task is toggled as complete 
*/
export function renderTasks(project) {
	// get task div by id
	const taskList = document.getElementById("tasks");
	// clear tasks from div id (while div.lastchild div.removeChild(div.lastChild))
	while (taskList.lastChild) {
		taskList.removeChild(taskList.lastChild);
	}
	// loop through all tasks in memory
	for (let i = 0; i < taskArray.length; i++) {
		// if task.project === project parameter
		if (taskArray[i].project === project) {
			// assemble task DOM
			const task = document.createElement("div");
			task.classList.add("task");
			const title = document.createElement("h3");
			title.textContent = taskArray[i].title;
			const description = document.createElement("div");
			description.textContent = taskArray[i].description;
			const dueDate = document.createElement("div");
			dueDate.textContent = taskArray[i].dueDate;
			const priority = document.createElement("div");
			priority.textContent = taskArray[i].priority;
			// append components to task element
			task.appendChild(title);
			task.appendChild(description);
			task.appendChild(dueDate);
			task.appendChild(priority);
			// append task element to tasks div
			taskList.appendChild(task);
		}
	}
}

/* 
    Render Projects in sidebar
    Called after:
        New project is created by making a task with a unique project property 
*/
export function renderProjects() {
	// get sidebar div by id
	// clear projects from sidebar (while div.lastChild div.removeChild(div.lastChild))
	// make empty projects array
	// loop through all tasks in memory
	// if task.project is not already in the projects array
	// push task.project property to array
	// loop through projects array
	// append project to sidebar
}
