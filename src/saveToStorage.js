/* Saves the inputted item to storage */
/* Only pure object format tasks should be inputted (No DOM!) */
/* 
    The storage should contain a list of many tasks, each with a
    project property that can be accessed by the user to bring up
    every task with the specified project name
*/
export default function saveToStorage(projectName, taskItem) {
	try {
		// does project exist in storage?
		if (localStorage.contains(projectName)) {
			// load and parse array under project key
			const loadedTasks = JSON.parse(localStorage.getItem(projectName));
			console.log(loadedTasks);
			if (typeof taskItem === "object") {
				// push task to array
				loadedTasks.push(taskItem);
				// save new array to storage under projectname
				localStorage.setItem(projectName, JSON.stringify(loadedTasks));
				console.log("Object Save Successful");
			} else {
				console.log("Invalid Item Type:" + typeof item);
			}
		} else {
			// create array
			const loadedTasks = [];
			// push new task to it
			loadedTasks.push(taskItem);
			// create new project with task array
			localStorage.setItem(projectName, JSON.stringify(loadedTasks));
		}
	} catch (error) {
		console.log(error);
	}
}
/* 
    Could save every project name as a key in storage, with the value being an array composed of task objects under that project?
    Then when loading a project it's as simple as getting direct from storage using the key and then handling the array of tasks
    Default project = "default-project"
*/
