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
function renderTasks(project) {
	// get task div by id
	// clear tasks from div id (while div.lastchild div.removeChild(div.lastChild))
	// loop through all tasks in memory
	    // if task.project === project parameter
	        // append project tasks to tasks div
}

/* 
    Render Projects in sidebar
    Called after:
        New project is created by making a task with a unique project property 
*/
function renderProjects() {
	// get sidebar div by id
	// clear projects from sidebar (while div.lastChild div.removeChild(div.lastChild))
	// make empty projects array
	// loop through all tasks in memory
	    // if task.project is not already in the projects array
	        // push task.project property to array
	// loop through projects array
	    // append project to sidebar
}
