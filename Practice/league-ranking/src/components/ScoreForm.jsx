import teamsData from "../playersData";
import { useState } from "react";

// const clubLogos = teamsData.map((team) => team.clubLogo);
function ScoreForm({
	ranking,
	onRankingRender,
	onUpdateRanking,
	homeTeam,
	awayTeam,
	team1,
	team2,
	onSelectTeam1,
	onSelectTeam2,
	team1Score,
	team2Score,
	onAddP1Score,
	onAddP2Score,
	onAddScore,
	onAddTeam,
	clubs,
	onSelectClub,
}) {
	// States
	const [createdTeam, setCreatedTeam] = useState("");

	const [point, setPoints] = useState(0);
	const [win, setWin] = useState(0);
	const [draw, setDraw] = useState(0);
	const [loss, setLoss] = useState(0);
	const [goalsFor, setGoalsFor] = useState(0);
	const [goalsAgainst, setGoalsAgainst] = useState(0);
	let goalsDifference = 0;

	const playerObj = ranking.map((player) => player);
	const { teamName } = playerObj;
	const clubsData = clubs.map((club) => club);

	// Handle submit form
	function handleSubmit(e) {
		e.preventDefault();

		let clubImg = teamsData.map((team) => team.clubLogo);
		let clubImgId = 0;
		const imgIndex = teamsData.map((team) => {
			if (team.clubName === createdTeam) {
				clubImgId = team.id - 1;
			}
			return clubImgId;
		});

		if (ranking.length < 3) {
			const newTeam = {
				id: Date.now(),
				teamName: createdTeam,
				clubLogo: clubImg[clubImgId],
				points: 0,
				wins: 0,
				draws: 0,
				losses: 0,
				goalsFor: 0,
				goalsAgainst: 0,
				goalDifference: 0,
			};
			if (createdTeam.length > 1) {
				onAddTeam(newTeam);
				setCreatedTeam("");
			} else {
				alert("Pick a team first, please.");
			}
		} else {
			// Build the new result, and add it into the scoreBoard state/table.
			let team1ImgId = 0;
			let team2ImgId = 0;

			teamsData.map((team) => {
				if (team.clubName === team1) {
					team1ImgId = team.id - 1;
				}
				return team1ImgId;
			});
			teamsData.map((team) => {
				if (team.clubName === team2) {
					team2ImgId = team.id - 1;
				}
				return team2ImgId;
			});
			const newResult = {
				id: Date.now(),
				homeTeamLogo: clubImg[team1ImgId],
				homeTeam: team1,
				awayTeam: team2,
				awayTeamLogo: clubImg[team2ImgId],
				result: team1Score + " : " + team2Score,
			};
			if (team1 && team2) {
				onAddScore(newResult);
			} else {
				alert("Select both teams, please.");
			}
			if (newResult) {
				if (team1Score > team2Score) {
					const team1NewStats = ranking.map((team) => {
						if (team1 === team.teamName) {
							goalsDifference = team1Score - team2Score;
							return {
								...team,
								points: team.points + 3,
								wins: team.wins + 1,
								draws: team.draws,
								losses: team.losses,
								goalsFor: team.goalsFor + team1Score,
								goalsAgainst: team.goalsAgainst + team2Score,
								goalDifference: team.goalDifference + goalsDifference,
							};
						} else if (team2 === team.teamName) {
							goalsDifference = team2Score - team1Score;
							return {
								...team,
								points: team.points,
								wins: team.wins,
								draws: team.draws,
								losses: team.losses + 1,
								goalsFor: team.goalsFor + team2Score,
								goalsAgainst: team.goalsAgainst + team1Score,
								goalDifference: team.goalDifference + goalsDifference,
							};
						} else {
							return team;
						}
					});
					onUpdateRanking(team1NewStats);
				} else if (team2Score > team1Score) {
					const team1NewStats = ranking.map((team) => {
						if (team2 === team.teamName) {
							goalsDifference = team2Score - team1Score;
							return {
								...team,
								points: team.points + 3,
								wins: team.wins + 1,
								draws: team.draws,
								losses: team.losses,
								goalsFor: team.goalsFor + team2Score,
								goalsAgainst: team.goalsAgainst + team1Score,
								goalDifference: team.goalDifference + goalsDifference,
							};
						} else if (team1 === team.teamName) {
							goalsDifference = team1Score - team2Score;
							return {
								...team,
								points: team.points,
								wins: team.wins,
								draws: team.draws,
								losses: team.losses + 1,
								goalsFor: team.goalsFor + team1Score,
								goalsAgainst: team.goalsAgainst + team2Score,
								goalDifference: team.goalDifference + goalsDifference,
							};
						} else {
							return team;
						}
					});
					onUpdateRanking(team1NewStats);
				} else if (team1 && team2 && team1Score === team2Score) {
					const team1NewStats = ranking.map((team) => {
						if (team1 === team.teamName) {
							goalsDifference = team1Score - team2Score;
							return {
								...team,
								points: team.points + 1,
								wins: team.wins,
								draws: team.draws + 1,
								losses: team.losses,
								goalsFor: team.goalsFor + team1Score,
								goalsAgainst: team.goalsAgainst + team2Score,
								goalDifference: team.goalDifference + goalsDifference,
							};
						} else if (team2 === team.teamName) {
							goalsDifference = team2Score - team1Score;
							return {
								...team,
								points: team.points + 1,
								wins: team.wins,
								draws: team.draws + 1,
								losses: team.losses,
								goalsFor: team.goalsFor + team2Score,
								goalsAgainst: team.goalsAgainst + team1Score,
								goalDifference: team.goalDifference + goalsDifference,
							};
						} else {
							return team;
						}
					});
					onUpdateRanking(team1NewStats);
				}
			} else {
				console.log("Nothing to update!");
			}
			// Re-render Ranking
			onRankingRender();
		}
	}

	return (
		<div className="score-form">
			{ranking.length > 2 && (
				<form onSubmit={handleSubmit}>
					<span>
						<select
							className="score-select-team"
							defaultValue={"home"}
							value={teamName}
							onChange={(e) => onSelectTeam1(e.target.value)}
							required
						>
							<option value="home" disabled>
								Home Team
							</option>

							<option value={playerObj[0].teamName}>
								{playerObj[0].teamName}
							</option>
							<option value={playerObj[1].teamName}>
								{playerObj[1].teamName}
							</option>
							<option value={playerObj[2].teamName}>
								{playerObj[2].teamName}
							</option>
						</select>
						<input
							className="score-input"
							type="number"
							value={team1Score}
							onChange={(e) => onAddP1Score(Number(e.target.value))}
							required
						/>
					</span>
					:
					<span>
						<input
							className="score-input"
							type="number"
							value={team2Score}
							onChange={(e) => onAddP2Score(Number(e.target.value))}
							required
						/>
						<select
							className="score-select-team"
							defaultValue={"away"}
							value={teamName}
							onChange={(e) => onSelectTeam2(e.target.value)}
							required
						>
							<option value="away" disabled>
								Away Team
							</option>
							<option value={playerObj[0].teamName}>
								{playerObj[0].teamName}
							</option>
							<option value={playerObj[1].teamName}>
								{playerObj[1].teamName}
							</option>
							<option value={playerObj[2].teamName}>
								{playerObj[2].teamName}
							</option>
						</select>
					</span>
					<button>Add</button>
				</form>
			)}
			{ranking.length < 3 && (
				<form className="new-team-form" onSubmit={handleSubmit}>
					<span>
						<select
							className="select-new-team"
							defaultValue={"home"}
							value={clubsData.clubName}
							onChange={(e) => setCreatedTeam(e.target.value)}
							required
						>
							<option value="home" disabled>
								Home Team
							</option>
							<optgroup label="EPL">
								<option value={clubsData[0].clubName}>
									{clubsData[0].clubName}
								</option>
								<option value={clubsData[1].clubName}>
									{clubsData[1].clubName}
								</option>
								<option value={clubsData[2].clubName}>
									{clubsData[2].clubName}
								</option>
								<option value={clubsData[3].clubName}>
									{clubsData[3].clubName}
								</option>
								<option value={clubsData[4].clubName}>
									{clubsData[4].clubName}
								</option>
							</optgroup>

							<optgroup label="La Liga">
								<option value={clubsData[5].clubName}>
									{clubsData[5].clubName}
								</option>
								<option value={clubsData[6].clubName}>
									{clubsData[6].clubName}
								</option>
								<option value={clubsData[7].clubName} disabled>
									{clubsData[7].clubName}
								</option>
							</optgroup>
							<optgroup label="Serie A">
								<option value={clubsData[8].clubName}>
									{clubsData[8].clubName}
								</option>
								<option value={clubsData[9].clubName} disabled>
									{clubsData[9].clubName}
								</option>
								<option value={clubsData[10].clubName}>
									{clubsData[10].clubName}
								</option>
								<option value={clubsData[11].clubName}>
									{clubsData[11].clubName}
								</option>
								<option value={clubsData[12].clubName} disabled>
									{clubsData[12].clubName}
								</option>
								<option value={clubsData[13].clubName}>
									{clubsData[13].clubName}
								</option>
								<option value={clubsData[14].clubName}>
									{clubsData[14].clubName}
								</option>
								<option value={clubsData[15].clubName} disabled>
									{clubsData[15].clubName}
								</option>
							</optgroup>
							<optgroup label="Bundesliga">
								<option value={clubsData[16].clubName}>
									{clubsData[16].clubName}
								</option>
								<option value={clubsData[17].clubName}>
									{clubsData[17].clubName}
								</option>
							</optgroup>
							<optgroup label="Eredivisie">
								<option value={clubsData[18].clubName}>
									{clubsData[18].clubName}
								</option>
							</optgroup>
							<optgroup label="Ligue 1">
								<option value={clubsData[19].clubName}>
									{clubsData[19].clubName}
								</option>
							</optgroup>
						</select>
					</span>
					<button>Add</button>
				</form>
			)}
		</div>
	);
}
export default ScoreForm;
