function WatchedMovie({ watchedMovie, onRemWatched }) {
	return (
		<>
			<img src={watchedMovie.poster} alt={`${watchedMovie.title} poster`} />
			<h3>{watchedMovie.title}</h3>
			<div>
				<p>
					<span>⭐️</span>
					<span>{watchedMovie.imdbRating}</span>
				</p>
				<p>
					<span>🌟</span>
					<span>{watchedMovie.userRating}</span>
				</p>
				<p>
					<span>⏳</span>
					<span>{watchedMovie.runtime} min</span>
				</p>
				<button
					className="btn-delete"
					onClick={() => onRemWatched(watchedMovie.imdbID)}
				>
					❌
				</button>
			</div>
		</>
	);
}
export default WatchedMovie;
