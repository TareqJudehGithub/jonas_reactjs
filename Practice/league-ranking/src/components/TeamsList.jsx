import Team from "./Team";

function TeamsList({ teams }) {
	// Sort teams table by points, then by goals difference.
	let sortedTeams = teams
		.slice()
		.sort(
			(a, b) =>
				Number(b.points) - Number(a.points) ||
				Number(b.goalDifference) - Number(a.goalDifference)
		);

	return (
		<main>
			{sortedTeams.length > 0 && (
				<table className="standing-table">
					<thead className="table-head">
						<tr>
							<th className="team-name-header">Teams</th>
							<th>G</th>
							<th>W</th>
							<th>D</th>
							<th>L</th>
							<th>GF</th>
							<th>GA</th>
							<th>GD</th>
							<th>Pts</th>
						</tr>
					</thead>
					<tbody className="table-body">
						{sortedTeams.map((team) => (
							<Team key={team.id} team={team} />
						))}
					</tbody>
				</table>
			)}
		</main>
	);
}
export default TeamsList;
