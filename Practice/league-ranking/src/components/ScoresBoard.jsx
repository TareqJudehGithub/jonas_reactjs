import Score from "./Score";
function ScoreBoard({ scoreBoard }) {
	return (
		scoreBoard.length > 0 && (
			<div>
				<table className="scores-board">
					<thead className="score-board-header">
						<tr>
							<th className="home-team-header">Home Team</th>
							<th className="result-header">
								{/* {scoreBoard.length < 4 ? (
									<p className="leg">1st Leg</p>
								) : (
									<p className="leg">2nd Leg</p>
								)} */}
								Result
							</th>
							<th className="away-team-header">Away Team</th>
						</tr>
					</thead>
					<tbody className="scores-body">
						{scoreBoard.map((score) => (
							<Score key={score.id} score={score} scores={scoreBoard} />
						))}
					</tbody>
				</table>
			</div>
		)
	);
}
export default ScoreBoard;
