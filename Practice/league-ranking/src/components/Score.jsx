function Score({ score }) {
	return (
		<tr className="game-score" key={score.id}>
			<td>{score.homeTeam}</td>
			<td>{score.result}</td>
			<td>{score.awayTeam}</td>
		</tr>
	);
}
export default Score;
