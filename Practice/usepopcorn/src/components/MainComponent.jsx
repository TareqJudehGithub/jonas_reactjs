import ListBox from "./ListBox";
import WatchedBox from "./WatchedBox";

function MainComponent({ movies }) {
	return (
		<main className="main">
			<ListBox movies={movies} />
			<WatchedBox />
		</main>
	);
}
export default MainComponent;
