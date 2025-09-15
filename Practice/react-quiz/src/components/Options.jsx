export default function Options({
	// @ts-ignore
	option,
	// @ts-ignore
	index,
	// @ts-ignore
	dispatch,
	// @ts-ignore
	question,
	// @ts-ignore
	answer,
}) {
	const isAnswered = answer !== null;
	if (index === answer) {
		console.log(`Index: ${index}`);
	}

	return (
		// Check if the current index(option clicked equals the answer)
		<button
			disabled={isAnswered}
			className={`btn btn-option ${index === answer ? "answer" : ""} 		
				${isAnswered ? (index === question.correctOption ? "correct" : "wrong") : ""}`}
			onClick={() => dispatch({ type: "newAnswer", payload: index })}
		>
			{option}
		</button>
	);
}
