import "./style.css";
import createTodo from "./createTodo.js";
import changeTodoPriority from "./changeTodoPriority.js";
import deleteTodo from "./deleteTodo.js";
import expandTodo from "./expandTodo.js";
import setTodoComplete from "./setTodoComplete.js";
import home from "./home.js";
import projects from "./projects.js";



/* DOM-Related Stuff */

/* Tests */
function testLog() {
	console.log("Successful Link");
}

testLog();

const testTodoItem = createTodo("Iron Laundry", "Iron the rest of the laundry leftover from yesterday", "24/07/2024", 1, 1);
console.log(testTodoItem);
changeTodoPriority(testTodoItem, 2);
console.log(testTodoItem);