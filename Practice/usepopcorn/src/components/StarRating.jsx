import { useState } from "react";
import Star from "./Star";

import PropType from "prop-types";

const containerStyle = {
	display: "flex",
	alignItems: "start",
	gap: "16px",
};

const starContainerStyle = {
	display: "flex",
};

StarRating.propTypes = {
	maxRating: PropType.number,
	defaultRating: PropType.number,
	color: PropType.string,
	size: PropType.number,
	messages: PropType.array,
	className: PropType.string,
	onSetRating: PropType.func,
};

function StarRating({
	maxRating = 5,
	color = "#fcc419",
	size = 24,
	className,
	messages = [],
	defaultRating = 0,
	onSetRating,
}) {
	//  prop = 5 is the default prop value.

	// States
	const [rating, setRating] = useState(defaultRating);
	const [tempRating, setTempRating] = useState(0);

	// Handlers
	function handleRating(rating) {
		/* This handle updates the rating state by clicking on the star index. We
		add 1 because arrays are 0 indexing, while rating starts with 1 */
		setRating(rating);
		console.log(`Rating is set to ${rating}`);

		onSetRating && onSetRating(rating); // passing set handler to another component
	}
	// Styles
	const textStyle = {
		lineHeight: "1",
		margin: "0",
		color,
		fontSize: `${size}px`,
	};

	return (
		<div style={containerStyle} className={className}>
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
						color={color}
						size={size}
						full={tempRating ? tempRating >= index + 1 : rating >= index + 1}
					/>
				))}
			</div>
			<p style={textStyle}>
				{messages.length === maxRating // Check if the array length is equal to maxRating length.
					? messages[
							tempRating
								? tempRating - 1 // Switch back to array indexing for messages array.
								: rating - 1
					  ] // after checking if tempRating or rating is not null.
					: tempRating || rating || ""}
				{/* {tempRating || rating || ""}  */}
			</p>
		</div>
	);
}
export default StarRating;
