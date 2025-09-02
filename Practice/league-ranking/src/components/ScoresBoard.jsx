import Score from "./Score";
function ScoreBoard({ scoreBoard }) {
	return (
		<table className="scores-board">
			<thead>
				<tr>
					<th>Home Team</th>
					<th>Result</th>
					<th>Away Team</th>
				</tr>
			</thead>
			<tbody>
				{scoreBoard.map((score) => (
					<Score key={score.id} score={score} />
				))}
			</tbody>
		</table>
	);
}
export default ScoreBoard;
