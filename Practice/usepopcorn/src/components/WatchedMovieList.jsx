import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched, selectedId, onRemWatched }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<li key={movie.imdbID}>
					<WatchedMovie
						movie={movie}
						selectedId={selectedId}
						onRemWatched={onRemWatched}
					/>
				</li>
			))}
		</ul>
	);
}
export default WatchedMovieList;
