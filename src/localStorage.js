// Do storage last

/* 
    Saves task to localstorage
    Called when a new task is created
    Called when a task is edited (after original task is deleted)
    Parameter needed, JS object containing all task properties
*/
export function saveTask(taskObject) {
	try {
		// save under key: task.title
		// JSON.stringify to store safely
		localStorage.setItem(taskObject.title, JSON.stringify(taskObject));
		console.log(`Task saved as: ${taskObject.title}`);
	} catch (error) {
		console.log(error);
	}
}

/*
    Looks for tasks in localStorage
    Called when app is first loaded
    No parameters needed, all tasks are brought out into the session
*/
export function loadTasks() {
	try {
		// if nothing in storage
		if (localStorage.length === 0) {
			return false;
		} else {
			// load all tasks
			const loadedTasks = [];
			for (let i = 0; i < localStorage.length; i++) {
				let key = localStorage.key(i);
				loadedTasks.push(JSON.parse(localStorage.getItem(key)));
			}
			console.log(`after pushing from localStorage, loadedTasks is:`);
			console.log(loadedTasks);
			// return loaded tasks
			return loadedTasks;
		}
	} catch (error) {
		console.log(error);
	}
}
/* 
    Called when task is edited to delete old task (before edited task is saved)
    Parameter needed, title of task used to find key-value pair and delete the old task
*/
export function deleteTask(taskTitle) {
	try {
		// delete from localStorage using key: taskTitle
	} catch (error) {
		console.log(error);
	}
}
