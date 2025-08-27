import { useEffect, useRef } from "react";
import useEnterKey from "./useEnterKey";
import useKey from "./useKey";

function Search({ query, onSetQuery }) {
	const focusInput = useRef(null);

	// useEnterKey("Enter", onSetQuery, focusInput);

	// Re-using useKey
	//useKey("Enter", This is called a callback function 👇)
	useKey("Enter", function () {
		if (document.activeElement === focusInput.current) return;
		focusInput.current.focus();
		onSetQuery("");
	});

	// useEffect(
	// 	function () {

	// 		// Add an event to focus on Search bar element upon Enter key hit.
	// 		function callback(e) {
	// 			// If the cursor is on the active element (Search input), don't
	// 			// clear text
	// 			if (document.activeElement === focusInput.current) {
	// 				return focusInput.current.focus();
	// 			}

	// 			if (e.code === "Enter") {
	// 				// focus only on Enter key
	// 				focusInput.current.focus();
	// 				onSetQuery(""); // Reset Search Bar
	// 			}
	// 		}
	// 		document.addEventListener("keydown", callback);
	// 		return () => document.removeEventListener("keydown", callback);
	// 	},
	// 	[onSetQuery]
	// );

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => onSetQuery(e.target.value)}
			ref={focusInput}
		/>
	);
}
export default Search;
