// Do storage last

/* 
    Saves task to localstorage
    Called when a new task is created
    Called when a task is edited (after original task is deleted)
    Parameter needed, JS object containing all task properties
*/
export function saveTask(taskObject) {
	// save under key: task.title
	// JSON.stringify to store safely
}

/*
    Looks for tasks in localStorage
    Called when app is first loaded
    No parameters needed, all tasks are brought out into the session
*/
export function loadTasks() {
	// load all tasks
    const loadedTasks = [];
    for (let i=0; i<localStorage.length; i++) {
        loadedTasks.push(localStorage.key[i]);
    }
	// return loaded tasks
    return loadedTasks;
}
/* 
    Called when task is edited to delete old task (before edited task is saved)
    Parameter needed, title of task used to find key-value pair and delete the old task
*/
export function deleteTask(taskTitle) {
	// delete from localStorage using key: taskTitle
}
