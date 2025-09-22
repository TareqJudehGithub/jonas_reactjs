// @ts-ignore
function Score({ score, scores }) {
	const { homeTeamLogo, homeTeam, result, awayTeam, awayTeamLogo } = score;

	return (
		<tr className="result-score-tr">
			<td className="home-td">
				<span className="home-span">
					<img
						className="result-img home-img"
						src={homeTeamLogo}
						alt={homeTeam}
					/>

					{homeTeam}
				</span>
			</td>

			<td className="result-score-td">{result}</td>

			<td className="away-td">
				<span className="away-span">
					<img
						className="result-img away-img"
						src={awayTeamLogo}
						alt={awayTeam}
					/>
					{awayTeam}
				</span>
			</td>
		</tr>
	);
}
export default Score;
