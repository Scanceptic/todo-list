export default function updateSidebar() {
	// get sidebar DOM
	const sidebar = document.getElementById("sidebar");
	// clear sidebar DOM
	while (sidebar.firstChild) {
		sidebar.remove(sidebar.firstChild);
	}
	// loop through projects in storage
	for (let i = 0; i < localStorage.length; i++) {
		// get project name for each position
		const projectName = localStorage.key();
		// create button with textContent = projectname
		projectBtn = document.createElement("button");
		projectBtn.textContent = projectName;
		// add eventlistener to button
		projectBtn.addEventListener("click", () => {
			// TODO script event listener
			console.log("Project button clicked: " + projectName);
		});
		// if even add styling class
		if (i % 2 === 0) {
			projectBtn.classList.add("even");
		}
		// append button to sidebar
		sidebar.appendChild(projectBtn);
	}

	// update sidebar with projects in storage
	// each project should be a button element
	// on click get local storage for project and load it onto DOM (under content)
	// clear content before appending new project tasks
}
