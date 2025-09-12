import React from "react";

export default function Option({
	option,
	index,
	correctOption,
	answer,
	dispatch,
}) {
	const isAnswered = answer !== null;
	return (
		<div className="option">
			<button
				disabled={isAnswered}
				className={
					isAnswered
						? `btn btn-option ${correctOption === index ? "correct" : "wrong"}`
						: "btn btn-option"
				}
				onClick={() => dispatch({ type: "newAnswer", payload: index })}
			>
				{option} {index}
			</button>
		</div>
	);
}
