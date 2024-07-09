import updateTodo from "./updateTodo.js";

export default function updateSidebar() {
	try {
		// get sidebar DOM
		const sidebar = document.getElementById("sidebar");
		// clear sidebar DOM
		while (sidebar.firstChild) {
			sidebar.removeChild(sidebar.lastChild);
		}
		// loop through projects in storage
		for (let i = 0; i < localStorage.length; i++) {
			// get project name for each position
			const projectName = localStorage.key(i);
			// create button with textContent = projectname
			const projectBtn = document.createElement("button");
			projectBtn.textContent = projectName;
			// add eventlistener to button
			projectBtn.addEventListener("click", () => {
				// update todo list with new project tasks
				updateTodo(projectName);
			});
			// if even add styling class
			if (i % 2 === 0) {
				projectBtn.classList.add("even");
			}
			// append button to sidebar
			sidebar.appendChild(projectBtn);
		}
	} catch (error) {
		console.log(error);
	}
}
