import { useSearchParams, useNavigate } from "react-router-dom";
// @ts-ignore
import styles from "./Map.module.css";

export default function Map() {
	const navigate = useNavigate();
	const [searchParams, setSearchParams] = useSearchParams();
	const lat = searchParams.get("lat");
	const lng = searchParams.get("lng");
	return (
		<div
			className={styles.mapContainer}
			// go to form route
			onClick={() => {
				navigate("form");
			}}
		>
			<h1>Map</h1>
			<h2>
				Position: {lat}, {lng}
			</h2>
			<button
				onClick={() => {
					setSearchParams({ lat: "23, lng: 50" });
				}}
			>
				Change position
			</button>
		</div>
	);
}
