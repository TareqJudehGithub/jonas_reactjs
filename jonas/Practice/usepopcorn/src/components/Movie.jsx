function Movie({ movie, onSelectedMovie, selectedId }) {
	return (
		<li
			// Closing same movie details by clicking on that same movie once again
			// onClick={
			// 	selectedId === movie.imdbID
			// 		? () => onSelectedMovie(null)
			// 		: () => onSelectedMovie(movie.imdbID)
			// }

			onClick={() => onSelectedMovie(movie.imdbID)}
		>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<div>
				<p>
					<span>🗓</span>
					<span>{movie.Year}</span>
				</p>
			</div>
		</li>
	);
}
export default Movie;

// onCloseMovie;
