function Home({ onToggleLogin }) {
	return (
		<div className="container-home">
			<h2 className="row mb-4 p-3">Welcome Home</h2>
			<button
				className="row btn btn-primary m-1"
				type="submit"
				onClick={onToggleLogin}
			>
				Login Out
			</button>
		</div>
	);
}
export default Home;
