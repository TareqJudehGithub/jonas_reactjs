import { useEffect, useState } from "react";

import StarRating from "./StarRating";
function MovieDetails({ selectedId, onCloseMovie, KEY }) {
	// States
	const [movie, setMovie] = useState({});

	const {
		Title: title,
		Year: year,
		Poster: poster,
		Runtime: runTime,
		imdbRating,
		Plot: plot,
		Released: released,
		Actors: actors,
		Director: director,
		Genre: genre,
	} = movie;
	console.log(title, year);

	// Each time the component renders, or the user selects a movie, fetch
	// the movie details according to the selected Id.
	const url = `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedId}`;

	useEffect(() => {
		async function getMovieDetails() {
			const response = await fetch(url);
			const data = await response.json();

			setMovie(data);
		}
		getMovieDetails();
	}, []);

	return (
		<div className="details">
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
				</div>
			</header>
			<section>
				<div className="rating">
					<StarRating
						maxRating={10}
						size={24}
						defaultRating={1}
						messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
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
		</div>
	);
}
export default MovieDetails;
