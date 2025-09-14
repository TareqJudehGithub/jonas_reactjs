// @ts-ignore
export default function PreviousButton({ dispatch, answer }) {
	if (answer === null) {
		return null;
	}
	return (
		<button
			className="btn btn-ui"
			onClick={() => dispatch({ type: "previousQuestion" })}
		>
			Previous
		</button>
	);
}
