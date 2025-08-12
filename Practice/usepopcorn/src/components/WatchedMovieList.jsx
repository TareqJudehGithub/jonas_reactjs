import WatchedMovie from "./WatchedMovie";

function WatchedMovieList({ watched }) {
	return (
		<ul className="list">
			{watched.map((movie) => (
				<li key={movie.imdbID}>
					<WatchedMovie movie={movie} />
				</li>
			))}
		</ul>
	);
}
export default WatchedMovieList;
