import { useState } from "react";

function TextExpander({
	h1,
	children,
	collapsedNumWords,
	expandButtonText,
	collapseButtonText,
	buttonColor,
	className,
}) {
	// States
	const [isExpanded, setIsExpanded] = useState(false);

	// Handles
	function handleExpand() {
		console.log("clicking expand/collapse");
		setIsExpanded((isExpanded) => !isExpanded);
	}

	const splitArray = children.split(" ");
	let collapsedArray = [];
	let collapsedText = "";

	function splitParagraph(arr, collapsed) {
		for (let i = 0; i < collapsedNumWords; i++) {
			arr.push(splitArray[i]);
		}
		collapsed = arr.join(" ");
		return collapsed + "...";
	}
	const buttonStyle = { color: buttonColor, cursor: "pointer" };

	return (
		<div className={className}>
			<h1>{h1}</h1>
			{isExpanded ? (
				<p onClick={handleExpand}>
					{children}
					<span style={buttonStyle}> {collapseButtonText}</span>
				</p>
			) : (
				<p onClick={handleExpand}>
					{splitParagraph(collapsedArray, collapsedText)}

					<span style={buttonStyle}>{expandButtonText}</span>
				</p>
			)}
		</div>
	);
}
export default TextExpander;
