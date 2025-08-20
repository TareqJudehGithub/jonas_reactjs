import Movie from "./Movie";

function MovieList({ movies, onSelectedMovie, selectedId }) {
	return (
		<ul className="list list-movies">
			{movies?.map((movie) => (
				<Movie
					key={movie.imdbID}
					movie={movie}
					onSelectedMovie={onSelectedMovie}
					selectedId={selectedId}
				/>
			))}
		</ul>
	);
}
export default MovieList;
