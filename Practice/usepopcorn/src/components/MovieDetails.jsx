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

	// console.log(`watched state from MovieDetails:\n${}`);
	function handleAdd() {
		// 		onCloseMovie()
		const newWatchedMove = {
			imdbID: selectedId,
			poster: poster,
			title: title,
			released: released,
			Runtime: Number(runTime.split("").at(0)), // in API data, Runtime is in minutes format, so we need it in hours.
			genre: genre,
			imdbRating: Number(imdbRating),
			plot: plot,
			Actors: actors,
			director: director,
			userRating,
		};
		//alert(`Movie: ${movie.title} is already in your Watched List.`);
		onAddWatched(newWatchedMove);
		onCloseMovie();
		console.log("Added a new movie to Watched list.");
	}
	function handleUserRating(userRating) {
		setUserRating(userRating);
		console.log(userRating);
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
							{watched.map((watchedMov) =>
								watchedMov.imdbID === movie.imdbID
									? userRating > 0 && (
											<button disabled className="btn-add" onClick={handleAdd}>
												Cannot Add
											</button>
									  )
									: userRating > 0 && (
											<button className="btn-add" onClick={handleAdd}>
												Add
											</button>
									  )
							)}
							{userRating > 0 && (
								<button className="btn-add" onClick={handleAdd}>
									Add
								</button>
							)}
						</div>
					</header>
					<section>
						<div className="rating">
							<StarRating
								maxRating={10}
								size={24}
								defaultRating={0}
								messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
								onSetRating={handleUserRating}
							/>
						</div>
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
