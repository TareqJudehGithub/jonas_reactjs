// @ts-ignore
function Team({ team }) {
	const {
		played,
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
			<td className="score-number">{played}</td>
			<td className="score-number">{wins}</td>
			<td className="score-number">{draws}</td>
			<td className="score-number">{losses}</td>
			<td className="score-number">{goalsFor}</td>
			<td className="score-number">{goalsAgainst}</td>
			<td className="score-number">{goalDifference}</td>
			<td className="score-number points">{points}</td>
		</tr>
	);
}

export default Team;
