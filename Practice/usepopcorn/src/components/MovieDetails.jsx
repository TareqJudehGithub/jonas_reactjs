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
		Runtime: runTime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;
	console.log(`Runtime: ${runTime}`);
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

	// Handlers
	// Add a movie to watched list

	function handleAdd() {
		// 		onCloseMovie()
		const newWatchedMove = {
			imdbID: selectedId,
			poster: poster,
			title: title,
			released: released,
			runtime: Number(runTime.split("").at(0)), // in API data, Runtime is in minutes format, so we need it in hours.
			genre: genre,
			imdbRating: Number(imdbRating),
			plot: plot,
			actors: actors,
			director: director,
			userRating,
		};
		console.log(`Added movie: ${title}`);
		console.log(imdbID);
		onAddWatched(newWatchedMove);
		onCloseMovie();
	}

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
								{released} &bull; {runTime}
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
