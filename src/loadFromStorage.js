/* Gets the inputted item details from storage */
/* 
    Only pure object format tasks should be inputted (No DOM!)
    will need converting from user input into string 
*/
export default function loadFromStorage(item) {
	try {
		if (typeof item === "object") {
			// load taskList from storage and parse
			const loadedArray = JSON.parse(localStorage.getItem("taskArray"));
			// get item from array
			const loadedItem = loadedArray[item];
			console.log("Object Load Successful");
			// return item
			return loadedItem;
		} else {
			console.log("Invalid Item Type: " + typeof item);
		}
	} catch {
		console.log("Load failed");
	}
}
