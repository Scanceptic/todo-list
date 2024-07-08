import "./style.css";
import createTodo from "./createTodo.js";
import changeTodoPriority from "./changeTodoPriority.js";
import deleteTodo from "./deleteTodo.js";
import expandTodo from "./expandTodo.js";
import setTodoComplete from "./setTodoComplete.js";
import home from "./home.js";
import projects from "./projects.js";
import loadFromStorage from "./loadFromStorage.js";
import saveToStorage from "./saveToStorage.js";
import clearStorage from "./clearStorage.js";
import todoToDOM from "./todoToDOM.js";
import appendTodo from "./appendTodo.js";
import pageload from "./pageload.js";

// make a new default project if none in storage
pageload();