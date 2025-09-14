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
}) {
	return (
		<header className="progress">
			<progress value={index} max={numQuestions} />
			<p>
				<span>
					Question <strong>{index + 1}</strong>/ {numQuestions}
				</span>
			</p>
			<p>
				<span>
					{points}/{pointsTotal} points
				</span>
			</p>
		</header>
	);
}
