function NumResults({ movies }) {
	return movies.length > 0 ? (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results {/* movies.length */}
		</p>
	) : (
		<p></p>
	);
}
export default NumResults;
