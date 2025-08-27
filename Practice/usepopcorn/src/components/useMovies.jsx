import { useState, useEffect } from "react";

function useMovies(query) {
	const KEY = `deec4c57`;

	// States
	const [movies, setMovies] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	// Fetch movies data effect
	useEffect(() => {
		// onCloseMovie handle - temporary disabled
		// callback?.(); // optional chaining. If a callback exists, then call it.

		const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

		// Abort controller for cleaning up fetch api data.
		// This is a browser API, which has nothing to do with React.
		const controller = new AbortController();

		async function getData() {
			try {
				setIsLoading(true);

				// Reset Errors
				setError("");

				// Connecting our controller with the fetch request.
				const response = await fetch(url, { signal: controller.signal });

				if (!response.ok) {
					throw new Error("Error fetching data!");
				}

				const data = await response.json();

				// Movie/title not found
				if (data.Response === "False") {
					throw new Error("Movie not found!");
				}

				// .Search object is any array in data object (the OMDB API object)
				setMovies(data.Search);
				setIsLoading(false);
				setError("");
			} catch (err) {
				setError(err.message); // The Error set in the if statement block.

				if (err.name !== "AbortError") {
					// Ignore abort controller error
					setError(err.message);
				}
			} finally {
				setIsLoading(false);
			}
		}

		if (query.length === 0) {
			setMovies([]);
			setError("");
			return;
		}
		// Close the current selected movie
		// handleCloseMovie();

		getData();

		// Cleanup function - cleaning fetched API data
		return function () {
			controller.abort();
		};
	}, [query]);

	// The purpose of this "custom hook" is to return movies, isLoading, and error states
	return { movies, isLoading, error };
}

export default useMovies;
