import { useEffect, useState } from "react";
import Loader from "./Loader";
import StarRating from "./StarRating";

function MovieDetails({
	selectedId,
	onCloseMovie,
	KEY,
	onAddWatched,
	watched,
}) {
	// States
	const [movie, setMovie] = useState({});
	const [isLoading, setIsLoading] = useState(false);
	const [userRating, setUserRating] = useState(0);

	const {
		imdbID,
		Title: title,
		Poster: poster,
		Runtime: runtime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;

	// Derived states
	const isWatched = watched.map((movie) => movie.imdbID).includes(imdbID);
	const movieUserRating = watched.map((movie) =>
		movie.imdbID === selectedId ? movie.userRating : ""
	);

	// Each time the component renders, or the user selects a movie, fetch
	// the movie details according to the selected Id.
	const url = `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`;

	useEffect(() => {
		async function getMovieDetails() {
			setIsLoading((isLoading) => !isLoading);
			const response = await fetch(url);
			const data = await response.json();
			setMovie(data);
			setIsLoading((isLoading) => !isLoading);
		}
		getMovieDetails();
	}, [selectedId]); // Without including selectedId as dependency, the movie state
	// won't change upon directly selecting another movie after
	// selecting another right away.

	useEffect(
		function () {
			// Avoid "undefined title"
			if (!title) return;

			document.title = `Movie: ${title}`;

			// Cleanup function - Remove selected movie title
			return function () {
				document.title = "usePopcorn";
			};
		},
		[title]
	);

	// Handlers
	// Add a movie to watched list

	function handleAdd() {
		// 		onCloseMovie()
		const newWatchedMove = {
			imdbID: selectedId,
			poster: poster,
			title: title,
			released: released,
			runtime: Number(runtime.split(" ").at(0)), // in API data, Runtime is in minutes format, so we need it in hours.

			genre: genre,
			imdbRating: Number(imdbRating),
			plot: plot,
			actors: actors,
			director: director,
			userRating,
		};
		console.log(`Added movie: ${title}`);
		onAddWatched(newWatchedMove);
		onCloseMovie();
	}
	// Global keystroke event effect - Escape button to close selected movie
	// without accumulated rendering.
	// Each time the component re-renders, we will remove the eventListener from the
	// document.
	useEffect(
		function () {
			// If the user presses "Escape", call the handleCloseMovie handler
			function callback(e) {
				if (e.code === "Escape") {
					onCloseMovie();
				}
			}
			document.addEventListener("keydown", callback);
			return function () {
				document.removeEventListener("keydown", callback);
			};
		},
		[onCloseMovie]
	);

	// Handlers
	function handleUserRating(userRating) {
		setUserRating(userRating);
	}

	return (
		<div className="details">
			{isLoading ? (
				<Loader loading={isLoading} />
			) : (
				<>
					<header>
						<button className="btn-back" onClick={onCloseMovie}>
							&larr;
						</button>
						<img src={poster} alt={poster} />
						<div className="details-overview">
							<p>{title}</p>
							<p>
								{released} &bull; {runtime}
							</p>
							<p>{genre}</p>
							<p>
								<span>⭐</span>
								{imdbRating} IMDB rating
							</p>

							{isWatched && (
								<p>
									<em>
										You watched and rated {title} as ⭐ {movieUserRating}{" "}
										ratings
									</em>
								</p>
							)}
							{!isWatched && userRating > 0 && (
								<button className="btn-add" onClick={handleAdd}>
									Add
								</button>
							)}
						</div>
					</header>
					<section>
						{!isWatched && (
							<div className="rating">
								<StarRating
									maxRating={10}
									size={24}
									defaultRating={0}
									messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
									onSetRating={handleUserRating}
								/>
							</div>
						)}
						<p>
							<em>{plot}</em>
						</p>
						<p>
							Starring: <strong>{actors}</strong>
						</p>
						<p>Directed by {director}</p>
					</section>
				</>
			)}
		</div>
	);
}
export default MovieDetails;
