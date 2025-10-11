import { useState } from "react";

import tempMovieData from "./tempMovieData.js";
import tempWatchedData from "./tempWatchedData.js";

import NavBar from "./components/Navbar.jsx";
import MainComponent from "./components/MainComponent.jsx";

import Search from "./components/Search.jsx";
import NumResults from "./components/NumResults.jsx";
import Box from "./components/Box.jsx";

import MovieList from "./components/MovieList.jsx";
import WatchedSummary from "./components/WatchedSummary.jsx";
import WatchedMovieList from "./components/WatchedMovieList.jsx";

export default function App() {
	const [movies, setMovies] = useState(tempMovieData);
	const [watched, setWatched] = useState(tempWatchedData);

	return (
		<>
			{/* Component Composition technique */}
			<NavBar>
				<Search />
				<NumResults movies={movies} />
			</NavBar>

			{/* Component Composition technique 
					In Box, we pass {children} as props.
					<Box>
					<MovieList movies={movies} />
					</Box> */}

			<MainComponent>
				<Box>
					<MovieList movies={movies} />
				</Box>

				<Box>
					<WatchedSummary watched={watched} />
					<WatchedMovieList watched={watched} />
				</Box>
			</MainComponent>
		</>
	);
}
