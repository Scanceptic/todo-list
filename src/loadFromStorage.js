/* Gets the inputted item details from storage */

import { isMatch } from "date-fns";

/* 
    Only pure object format tasks should be inputted (No DOM!)
    will need converting from user input into string 
*/
export default function loadFromStorage(item) {
	try {
		if (typeof item === "object") {
			// load taskList from storage and parse
			const loadedArray = JSON.parse(localStorage.getItem(item.project));
			// get index of task in array
			const isMatchingTask = (storedTask) => storedTask.title === item.title;
			const taskIndex = loadedArray.findIndex(isMatchingTask);
			console.log(taskIndex);
			// get item from array
			const loadedItem = loadedArray[taskIndex];
			console.log("Object Load Successful");
			// return item
			console.log(loadedItem);
			return loadedItem;
		} else {
			console.log("Invalid Item Type: " + typeof item);
		}
	} catch (error) {
		console.log(error);
	}
}
