export default function Options({
	option,
	index,
	dispatch,
	question,
	answer,
}) {
	const isAnswered = answer !== null;

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
