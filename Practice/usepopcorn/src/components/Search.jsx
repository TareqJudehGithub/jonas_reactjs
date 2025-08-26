import { useEffect, useRef } from "react";

function Search({ query, onSetQuery: setQuery }) {
	const focusInput = useRef(null);

	useEffect(
		function () {
			// Add an event to focus on Search bar element upon Enter key hit.
			function callback(e) {
				// If the cursor is on the active element (Search input), don't
				// clear text
				if (document.activeElement === focusInput.current) {
					return focusInput.current.focus();
				}

				if (e.code === "Enter") {
					// focus only on Enter key
					focusInput.current.focus();
					setQuery(""); // Reset Search Bar
				}
			}
			document.addEventListener("keydown", callback);
			return () => document.removeEventListener("keydown", callback);
		},
		[setQuery]
	);

	return (
		<input
			className="search"
			type="text"
			placeholder="Search movies..."
			value={query}
			onChange={(e) => setQuery(e.target.value)}
			ref={focusInput}
		/>
	);
}
export default Search;
