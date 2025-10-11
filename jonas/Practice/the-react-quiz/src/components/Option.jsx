// @ts-ignore
import React from "react";

export default function Option({
	// @ts-ignore
	option,
	// @ts-ignore
	index,
	// @ts-ignore
	correctOption,
	// @ts-ignore
	answer,
	// @ts-ignore
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
