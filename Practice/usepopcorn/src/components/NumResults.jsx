function NumResults({ movies }) {
	return (
		<p className="num-results">
			Found <strong>{movies.length}</strong> results {/* movies.length */}
		</p>
	);
}
export default NumResults;
