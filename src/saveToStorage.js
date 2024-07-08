/* Saves the inputted item to storage */
/* Only pure object format tasks should be inputted (No DOM!) */
/* 
    The storage should contain a list of many tasks, each with a
    project property that can be accessed by the user to bring up
    every task with the specified project name
*/
export default function saveToStorage(projectName, taskItem) {
	try {
		// if storage is empty, create array in storage
		if (localStorage.length === 0) {
			const taskArray = [];
			taskArray.push(taskItem);
			localStorage.setItem(projectName, JSON.stringify(taskArray));
		} else {
			// get saved array out and parsed
			const loadedTasks = JSON.parse(localStorage.getItem("taskArray"));
			console.log(loadedTasks);
			if (typeof item === "object") {
				// push task to array
				loadedTasks.push(item);
				// save new array to storage
				localStorage.setItem("taskArray", JSON.stringify(loadedTasks));
				console.log("Object Save Successful");
			} else {
				console.log("Invalid Item Type:" + typeof item);
			}
		}
	} catch {
		console.log("Save failed");
	}
}
/* 
    Could save every project name as a key in storage, with the value being an array composed of task objects under that project?
    Then when loading a project it's as simple as getting direct from storage using the key and then handling the array of tasks
    Default project = "default-project"
*/
