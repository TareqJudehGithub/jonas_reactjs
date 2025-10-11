// @ts-ignore
import React from "react";

// @ts-ignore
export default function NextButton({ dispatch, answer, index, numQuestions }) {
	// Don't show the Next button in case the user have not submitted an answer yet.
	if (answer === null) {
		return null;
	}
	// Only show the Next button if the current question is less than the total No. of questions.
	if (index < numQuestions - 1)
		// between 1 and 13
		return (
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "nextQuestion" })}
			>
				Next
			</button>
		);
	if (index === numQuestions - 1) {
		// The last question - Q14
		return (
			<>
				<button
					className="btn btn-ui"
					onClick={() => dispatch({ type: "finish" })}
				>
					Finish
				</button>
			</>
		);
	}
}
