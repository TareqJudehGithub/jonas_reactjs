import { useState, useEffect } from "react";

function useLocalStorageState(initialState, key) {
	const [value, setValue] = useState(function () {
		const storedValue = localStorage.getItem(key);

		// Check if there's an actual value stored, not then return the initial state
		return storedValue ? JSON.parse(storedValue) : initialState;
	});

	// Run each time WatchedMovies is updated
	useEffect(
		function () {
			// Store data into localStorage using setItem(key, JSON.stringify(state))
			localStorage.setItem("watched", JSON.stringify(value));
		},
		[value, key]
	);
	return [value, setValue];
}
export default useLocalStorageState;
