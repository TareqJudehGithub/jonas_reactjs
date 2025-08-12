import { useState } from "react";

import tempMovieData from "./tempMovieData";
import NavBar from "./components/Navbar";
import MainComponent from "./components/MainComponent";

export default function App() {
	const [movies, setMovies] = useState(tempMovieData);

	return (
		<>
			<NavBar movies={movies} />
			<MainComponent movies={movies} />
		</>
	);
}
