// Do storage last

/* 
    Saves task to localstorage
    Called when a new task is created
    Called when a task is edited
    Parameter needed, JS object containing all task properties
*/
function saveTask(taskObject) {
	// save under key: task.title
	// JSON.stringify to store safely
}

/*
    Looks for tasks in localStorage
    Called when app is first loaded
        No parameters needed, all tasks are brought out into the session
*/
function load() {
	// load all tasks
	// return loaded tasks
}
/* 
    Called when task is edited to delete old task
        Parameter needed, title of task used to find key-value pair and delete the old task
*/
function deleteTask(taskTitle) {
	// delete from localStorage using key: taskTitle
}
