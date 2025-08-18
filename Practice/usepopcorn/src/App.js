import { useEffect, useState } from "react";

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

const KEY = `deec4c57`;

export default function App() {
	const [movies, setMovies] = useState([]);
	const [watched, setWatched] = useState([]);

	useEffect(() => {
		async function getData() {
			try {
				const url = `http://www.omdbapi.com/?apikey=${KEY}&s=aliens`;
				const response = await fetch(url);
				const data = response.json();

				// .Search object is any array in data object (the OMDB API object)
				data.then((data) => setMovies(data.Search));

				//	data.then((data) => setMovies(data.Search));
			} catch (error) {
				console.error("Error fetching data: ", error);
			}
		}
		getData();

		async function getUsers() {
			const res = await fetch("https://jsonplaceholder.typicode.com/users");
			const usersData = res.json();
			usersData.then((data) => console.log(data.at(0).name));
		}
		getUsers();
	}, []);

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

	return (
		<>
			{/* Component Composition technique */}
			<NavBar>
				<Search />
				<NumResults movies={movies} />
			</NavBar>

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
