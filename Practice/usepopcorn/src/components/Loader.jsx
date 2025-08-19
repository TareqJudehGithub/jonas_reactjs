import { ClipLoader } from "react-spinners";

function Loader({ loading }) {
	return (
		<div className="loader">
			<ClipLoader loading={loading} color="white" />
			<p>Fetching movies.. please wait..</p>
		</div>
	);
}

export default Loader;
