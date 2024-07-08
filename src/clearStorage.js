/* DELETES ALL LOCALSTORAGE CONTENTS - FOR TESTING ONLY */
export default function clearStorage() {
	try {
		localStorage.clear();
		console.log("Clear Successful");
	} catch {
		console.log("Clear Unsuccessful");
	}
}
