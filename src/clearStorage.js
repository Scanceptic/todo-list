/* DELETES ALL LOCALSTORAGE CONTENTS - FOR TESTING ONLY */
export default function clearStorage() {
	try {
		localStorage.clear();
	} catch (error) {
		console.log(error);
	}
}
