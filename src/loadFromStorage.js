/* Gets the inputted item details from storage */
/* 
    Only pure object format tasks should be inputted (No DOM!)
    will need converting from user input into string 
*/
export default function loadFromStorage(item) {
	try {
		if (typeof item === "object") {
			// load task as string
			localStorage.getItem(item.title, JSON.stringify(item));
			console.log("Object Load Successful");
		} else if (typeof item === "string") {
			// load project
			localStorage.getItem(item, item);
			console.log("Project Load Successful");
		}
	} catch {
		console.log("Load failed");
	}
}
