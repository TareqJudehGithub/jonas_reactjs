function Player({ player }) {
	const {
		playerName,
		points,
		wins,
		draws,
		losses,
		goalsFor,
		goalsAgainst,
		goalDifference,
	} = player;
	return (
		<tr>
			<td className="team-name">{playerName}</td>
			<td>{points}</td>
			<td>{wins}</td>
			<td>{draws}</td>
			<td>{losses}</td>
			<td>{goalsFor}</td>
			<td>{goalsAgainst}</td>
			<td>{goalDifference}</td>
		</tr>
	);
}

export default Player;
