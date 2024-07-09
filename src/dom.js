/* This is where all the DOM-related stuff is kept */

import { getTaskArray } from "./app.js";

/* 
    Render Tasks to DOM
    Requires parameter to determine which tasks to render
    Called after:
        Task is created
        Page is loaded
        Project button is clicked
        Task is toggled as complete 
*/
export function renderTasks(taskArray, project) {
	try {
		console.log("Rendering tasks...");
		// get task div by id
		const taskList = document.getElementById("tasks");
		// clear tasks from div id (while div.lastchild div.removeChild(div.lastChild))
		while (taskList.lastChild) {
			console.log("Clearing old tasks...");
			taskList.removeChild(taskList.lastChild);
		}
		// loop through all tasks in memory
		for (let i = 0; i < taskArray.length; i++) {
			console.log("Finding project tasks...");
			// if task.project === project parameter
			if (taskArray[i].project === project) {
				// assemble task DOM
				const task = document.createElement("div");
				task.classList.add("task");
				const title = document.createElement("h3");
				title.textContent = taskArray[i].title;
				title.classList.add("title");
				const description = document.createElement("div");
				description.textContent = taskArray[i].description;
				description.classList.add("description");
				const dueDate = document.createElement("div");
				dueDate.textContent = taskArray[i].dueDate;
				dueDate.classList.add("dueDate");
				const priority = document.createElement("div");
				priority.textContent = taskArray[i].priority;
				priority.classList.add("priority");
				// append components to task element
				task.appendChild(title);
				task.appendChild(description);
				task.appendChild(dueDate);
				task.appendChild(priority);
				// append task element to tasks div
				taskList.appendChild(task);
			}
		}
		console.log("New project tasks rendered");
	} catch (error) {
		console.log(error);
	}
}

/* 
    Render Projects in sidebar
    Called after:
        New project is created by making a task with a unique project property 
        on pageload
*/
export function renderProjects(taskArray) {
	try {
		console.log("Rendering projects...");
		// get projects div by id
		const projects = document.getElementById("projects");
		// clear projects from projects (while div.lastChild div.removeChild(div.lastChild))
		while (projects.lastChild) {
			console.log("Clearing old projects...");
			projects.removeChild(projects.lastChild);
		}
		// make empty projects array
		const projectsArray = [];
		// loop through all tasks in memory
		for (let i = 0; i < taskArray.length; i++) {
			console.log("Finding new projects...");
			// get item project
			const projectTitle = taskArray[i].project;
			// if task.project is not already in the projects array
			if (projectsArray.includes(projectTitle) === false) {
				// push task.project property to array
				projectsArray.push(projectTitle);
				// create project DOM element
				const projectElement = document.createElement("button");
				projectElement.classList.add("project");
				projectElement.id = projectTitle;
				projectElement.textContent = projectTitle;
				// add onclick event listener
				projectElement.addEventListener("click", () => {
					renderTasks(taskArray, projectTitle);
				});
				// append project DOM element to projects div
				projects.appendChild(projectElement);
			}
		}
		console.log("New projects rendered");
	} catch (error) {
		console.log(error);
	}
}
