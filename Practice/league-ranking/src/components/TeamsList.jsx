import { useState } from "react";
import Team from "./Team";

function TeamsList({ teams }) {
	//function sortByPoints() {
	let sortedTeams = teams
		.slice()
		.sort(
			(a, b) =>
				Number(b.points) - Number(a.points) ||
				Number(b.goalDifference) - Number(a.goalDifference)
		);

	return (
		<main>
			<table>
				<thead className="table-head">
					<tr>
						<th className="team-name">Teams</th>
						<th>Points</th>
						<th>W</th>
						<th>D</th>
						<th>L</th>
						<th>GF</th>
						<th>GA</th>
						<th>GD</th>
					</tr>
				</thead>
				<tbody className="table-body">
					{sortedTeams.map((team) => (
						<Team key={team.id} team={team} />
					))}
				</tbody>
			</table>
		</main>
	);
}
export default TeamsList;
