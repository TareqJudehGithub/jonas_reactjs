import Player from "./Player";
import ScoreForm from "./ScoreForm";

function PlayersList({ players }) {
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
					{players.map((player) => (
						<Player key={player.id} player={player} />
					))}
				</tbody>
			</table>
		</main>
	);
}
export default PlayersList;
