import { useState } from "react";
import StarRating from "./StarRating";

function Test() {
	const [movieRating, setMovieRating] = useState(0);

	return (
		<div>
			<StarRating
				color="blue"
				maxRating={10}
				onSetRating={setMovieRating}
				size={22}
			/>
			<p style={{ fontSize: "22px" }}>
				This movie was rated {movieRating} starts
			</p>
		</div>
	);
}

export default Test;
