function WatchedMovie({ movie, selectedId, onRemWatched }) {
	console.log(`WatchedMovie:  runtime is ${movie.runTime}`);

	// Handle Remove movie from Watched list

	return (
		<>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{movie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{movie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{movie.runtime} min</span>
				</p>
				<button onClick={() => onRemWatched(selectedId)}>❌</button>
			</div>
		</>
	);
}
export default WatchedMovie;
