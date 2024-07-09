import saveToStorage from "./saveToStorage.js";
import createTodo from "./createTodo.js";
/*
    If no project in storage, make a new default project
*/
export default function pageload() {
	try {
        if (localStorage.length === 0) {
        		saveToStorage(
        			"default-project",
        			createTodo("Example Task", "Here's an example task!", "01/01/1900", 1, "default-project")
        		)
        	}
    } catch (error) {
        console.log(error);
    }
}
