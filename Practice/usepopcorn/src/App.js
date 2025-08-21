import { useEffect, useState } from "react";

import NavBar from "./components/Navbar";
import Search from "./components/Search";
import NumResults from "./components/NumResults";

import MainComponent from "./components/MainComponent";
import Box from "./components/Box.jsx";
import MovieList from "./components/MovieList";

import WatchedSummary from "./components/WatchedSummary.jsx";
import WatchedMovieList from "./components/WatchedMovieList.jsx";

import Loader from "./components/Loader.jsx";
import ErrorMessage from "./components/ErrorMessage.jsx";
import MovieDetails from "./components/MovieDetails.jsx";

// Constant variables
const KEY = `deec4c57`;

export default function App() {
	// States
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	// Search bar state
	const [query, setQuery] = useState("");
	// Selected movie state
	const [selectedId, setSelectedId] = useState(null);

	// Hooks
	// Fetch movies data effect
	useEffect(() => {
		const url = `http://www.omdbapi.com/?apikey=${KEY}&s=${query}`;

		async function getData() {
			try {
				setIsLoading(true);

				// Reset Errors
				setError("");

				const response = await fetch(url);

				if (!response.ok) {
					console.log(`We received response number: ${response.status}`);
					throw new Error("Error fetching data!");
				}

				const data = await response.json();

				// Movie/title not found
				if (data.Response === "False") {
					console.log("No movie(s) were found");
					throw new Error("Movie not found!");
				}

				// .Search object is any array in data object (the OMDB API object)
				setMovies(data.Search);
				setIsLoading(false);
			} catch (err) {
				setError(err.message); // The Error set in the if statement block.
			} finally {
				setIsLoading(false);
			}
		}

		if (query.length === 0) {
			setMovies([]);
			setError("");

			return;
		}

		getData();
	}, [query]);

	// Handlers
	function handleQueryState(query) {
		// Search bar event handler
		setQuery(query);
	}

	function handleSelectMovie(id) {
		// MovieDetails event handler.
		// By clicking same movie, MovieDetails closes.
		setSelectedId((selectedId) => (id === selectedId ? null : id));
	}

	function handleCloseMovie() {
		// MovieDetails - Close button event handler
		console.log("Closing selected movie.");
		setSelectedId(null);
	}

	// add new item to the watchedMovie array handler
	function handleAddWatched(movie) {
		setWatched((movies) => [...movies, movie]);
		console.log(watched);
	}

	return (
		<>
			{/* Component Composition technique */}
			<NavBar>
				<Search query={query} onSetQuery={handleQueryState} />
				<NumResults movies={movies} />
			</NavBar>

			<MainComponent>
				<Box>
					{/* Ternary  */}
					{/* {error ? (
						<ErrorMessage message={error} />
					) : isLoading ? (
						<Loader loading={isLoading} />
					) : (
						<MovieList movies={movies} />
					) } */}

					{/* Short circuiting - cleaner */}
					{isLoading && <Loader loading={isLoading} />}
					{!isLoading && !error && (
						<MovieList
							movies={movies}
							onSelectedMovie={handleSelectMovie}
							selectedId={selectedId}
						/>
					)}
					{error && <ErrorMessage message={error} />}
				</Box>

				<Box>
					{selectedId ? (
						<MovieDetails
							selectedId={selectedId}
							onCloseMovie={handleCloseMovie}
							KEY={KEY}
							watched={watched}
							onAddWatched={handleAddWatched}
						/>
					) : (
						<>
							<WatchedSummary watched={watched} />
							<WatchedMovieList watched={watched} />
						</>
					)}
				</Box>
			</MainComponent>
		</>
	);
}

// Promises -  s= for search
// fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=aliens`)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data));

// async await - s= for search

// async function getData() {
// 	try {
// 		const url = `http://www.omdbapi.com/?apikey=${KEY}&s=aliens`;
// 		const response = await fetch(url);
// 		const data = response.json();

// 		data.then((data) => console.log(data.Search));

// 		// Search is any array in data object (the OMDB API object)
// 		//	data.then((data) => setMovies(data.Search));
// 	} catch (error) {
// 		console.error("Error fetching data: ", error);
// 	}
// }
// getData();
