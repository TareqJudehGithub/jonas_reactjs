// @ts-ignore
export default function FinishScreen({
	// @ts-ignore
	points,
	// @ts-ignore
	pointsTotal,
	// @ts-ignore
	highscore,
	// @ts-ignore
	dispatch,
}) {
	const pointsPercentage = (points / pointsTotal) * 100;
	let emoji;
	if (pointsPercentage === 100) {
		emoji = "🥇";
	} else if (pointsPercentage >= 80 && pointsPercentage < 100) {
		emoji = "🥈";
	} else if (pointsPercentage >= 50 && pointsPercentage < 80) {
		emoji = "🥉";
	} else {
		emoji = "🤔";
	}
	return (
		<>
			<p className="result">
				{emoji} You scored <strong>{points}</strong> out of {pointsTotal} (
				{Math.ceil(pointsPercentage)}%)
			</p>
			<p className="highscore">(Highscore: {highscore} points)</p>
			<button
				className="btn btn-ui"
				onClick={() => dispatch({ type: "restart" })}
			>
				Restart
			</button>
		</>
	);
}
