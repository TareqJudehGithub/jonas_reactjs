function Team({ team }) {
	const {
		teamName,
		clubLogo,
		points,
		wins,
		draws,
		losses,
		goalsFor,
		goalsAgainst,
		goalDifference,
	} = team;

	return (
		<tr>
			<td className="team-name-body">
				<img className="club-img" src={clubLogo} alt={teamName} />
				{teamName}
			</td>
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

export default Team;
