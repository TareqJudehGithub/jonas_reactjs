// @ts-ignore
export default function Progress({
	// @ts-ignore
	index,
	// @ts-ignore
	numQuestions,
	// @ts-ignore
	points,
	// @ts-ignore
	pointsTotal,
	// @ts-ignore
	highscore,
}) {
	return (
		<header className="progress">
			<progress value={index} max={numQuestions} />
			<p>
				Question <strong>{index + 1}</strong>/ {numQuestions}
			</p>
			<p>
				{points}/{pointsTotal} points
			</p>
			<p>Highscore: {highscore}</p>
		</header>
	);
}
