import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched, onRemWatched }) {
	return (
		<ul className="list">
			{watched.map((watchedMovie) => (
				<li key={watchedMovie.imdbID}>
					<WatchedMovie
						watchedMovie={watchedMovie}
						onRemWatched={onRemWatched}
					/>
				</li>
			))}
		</ul>
	);
}
export default WatchedMovieList;
