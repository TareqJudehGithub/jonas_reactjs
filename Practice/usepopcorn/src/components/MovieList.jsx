import Movie from "./Movie";

function MovieList({ movies }) {
	return (
		<ul className="list">
			{movies?.map((movie) => (
				<li key={movie.imdbID}>
					<Movie movie={movie} />
				</li>
			))}
		</ul>
	);
}
export default MovieList;
