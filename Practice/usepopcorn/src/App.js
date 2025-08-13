import { useState } from "react";

import tempMovieData from "./tempMovieData";
import tempWatchedData from "./tempWatchedData";

import NavBar from "./components/Navbar";
import MainComponent from "./components/MainComponent";

import Search from "./components/Search";
import NumResults from "./components/NumResults";
import Box from "./components/Box.jsx";

import MovieList from "./components/MovieList";
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
			<MainComponent>
				{/* Component Composition technique 
					In Box, we pass {children} as props.

				 <Box>
					<MovieList movies={movies} />
				</Box> */}

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
