function ScoreForm({
	players,
	player1Name,
	player2Name,
	onSelectPlayer1,
	onSelectPlayer2,
	player1Score,
	player2Score,
	onAddP1Score,
	onAddP2Score,
	scoreBoard,
	onAddScore,
}) {
	// handle add result to scoreboard
	function handleAddResult() {
		const newResult = {
			id: Date.now(),
			homeTeam: player1Name,
			awayTeam: player2Name,
			result: player1Score + " : " + player2Score,
		};
		onAddScore(newResult);
		if (scoreBoard.length > 0) {
			console.log("Added result successfully!");
		} else {
			console.log("Adding result did not work :(");
		}
	}
	const playerObj = players.map((player) => player);
	const {
		id,
		playerName,
		points,
		wins,
		draws,
		losses,
		goalsFor,
		goalsAgainst,
		goalDifference,
	} = playerObj;

	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="scores">
			<form onSubmit={handleSubmit}>
				<span>
					<select
						defaultValue={"home"}
						value={playerName}
						onChange={(e) => onSelectPlayer1(e.target.value)}
					>
						<option value="home" disabled>
							Home Team
						</option>
						<option value={playerObj[0].playerName}>
							{playerObj[0].playerName}
						</option>
						<option value={playerObj[1].playerName}>
							{playerObj[1].playerName}
						</option>
						<option value={playerObj[2].playerName}>
							{playerObj[2].playerName}
						</option>
					</select>
					<input
						type="number"
						value={player1Score}
						onChange={(e) => onAddP1Score(e.target.value)}
					/>
				</span>
				:
				<span>
					<select
						defaultValue={"away"}
						required
						value={playerName}
						onChange={(e) => onSelectPlayer2(e.target.value)}
					>
						<option value="away" disabled>
							Away Team
						</option>
						<option value={playerObj[0].playerName}>
							{playerObj[0].playerName}
						</option>
						<option value={playerObj[1].playerName}>
							{playerObj[1].playerName}
						</option>
						<option value={playerObj[2].playerName}>
							{playerObj[2].playerName}
						</option>
					</select>
					<input
						type="number"
						value={player2Score}
						onChange={(e) => onAddP2Score(e.target.value)}
					/>
				</span>
				<button onClick={handleAddResult}>Add</button>
			</form>
			<table className="scores-board">
				<thead>
					<tr>
						<th>id</th>
						<th>Home Team</th>
						<th>Result</th>
						<th>Away Team</th>
					</tr>
				</thead>
				<tbody>
					{scoreBoard.map((score) => (
						<tr key={score.id}>
							<td>{score.id}</td>
							<td>{score.homeTeam}</td>
							<td>{score.result}</td>
							<td>{score.awayTeam}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ScoreForm;
