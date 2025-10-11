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

import useMovies from "./components/useMovies.jsx";
import useLocalStorageState from "./components/useLocalStorageState.jsx";

// Constant variables
const KEY = `deec4c57`;

export default function App() {
	// Search bar state
	const [query, setQuery] = useState("");
	// Selected movie state
	const [selectedId, setSelectedId] = useState(null);

	// Custom Hooks
	// Destructure the returned object(s) from useMovies custom hook.
	const { movies, isLoading, error } = useMovies(query);
	const [watched, setWatched] = useLocalStorageState([], "watched");

	// Old code - before custom hook - useLocalStorageState
	// Call back function to call stored data in localStorage
	//const [watched, setWatched] = useState([]);
	// const [watched, setWatched] = useState(function () {
	// 	const storedValue = localStorage.getItem("watched");
	// 	// Convert back data to JSON format
	// 	return JSON.parse(storedValue);
	// });

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

		setSelectedId(null);
	}

	// add new item to the watchedMovie array handler
	function handleAddWatched(movie) {
		setWatched((movies) => [...movies, movie]);
	}
	// Handle remove Add
	function handleRemoveWatched(id) {
		setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
	}

	// Hooks

	// // Run each time WatchedMovies is updated
	// useEffect(
	// 	function () {
	// 		// Store data into localStorage using setItem(key, JSON.stringify(state))
	// 		localStorage.setItem("watched", JSON.stringify(watched));
	// 	},
	// 	[watched]
	// );

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
							<WatchedMovieList
								watched={watched}
								onRemWatched={handleRemoveWatched}
							/>
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
