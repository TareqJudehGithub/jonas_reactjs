import { useState } from "react";
import Star from "./Star";

const containerStyle = {
	display: "flex",
	alignItems: "center",
	gap: "16px",
};

const starContainerStyle = {
	display: "flex",
};

const textStyle = {
	lineHeight: "1",
	margin: "0",
};

function StarRating({ maxRating = 5 }) {
	//  prop = 5 is the default prop value.

	// States
	const [rating, setRating] = useState(0);
	const [tempRating, setTempRating] = useState(0);

	// Handlers
	function handleRating(rating) {
		/* This handle updates the rating state by clicking on the star index. We
		add 1 because arrays are 0 index, while rating starts with 1 */
		setRating(rating);
		console.log(`Rating is set to ${rating}`);
	}

	return (
		<div style={containerStyle}>
			<div style={starContainerStyle}>
				{Array.from({ length: maxRating }, (value, index) => (
					<Star
						key={index}
						onRate={() => handleRating(index + 1)}
						onHoverIn={() => setTempRating(index + 1)}
						onHoverOut={() => setTempRating(0)}
						// Check if a star is full or empty. If true, the full
						// star will be rendered. False? then empty star will be
						// rendered instead.

						full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
					/>
				))}
			</div>
			<p style={textStyle}>{tempRating || rating || ""}</p>
		</div>
	);
}
export default StarRating;
