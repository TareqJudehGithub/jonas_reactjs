import { useState } from "react";
import Header from "./components/Header";
import TeamsList from "./components/TeamsList";
import ScoreForm from "./components/ScoreForm";
import ScoreBoard from "./components/ScoresBoard";

import teamsData from "./playersData";

function App() {
	// States
	const [club, setClub] = useState(teamsData);
	const [ranking, setRanking] = useState([]);
	const [scoreBoard, setScoreBoard] = useState([]);

	const [team1Score, setTeam1Score] = useState(0);
	const [team2Score, setTeam2Score] = useState(0);

	const [homeTeam, setHomeTeam] = useState("");
	const [awayTeam, setAwayTeam] = useState("");

	const [team1, setTeam1] = useState("");
	const [team2, setTeam2] = useState("");

	// Handles
	function handleSelectClub() {
		setClub(club);
	}
	function handleAddTeam(team) {
		setRanking((teams) => [...teams, team]);
	}
	function handleSelectPlayer1(p1) {
		setTeam1(p1);
	}
	function handleSelectPlayer2(p2) {
		setTeam2(p2);
	}
	function handleAddP1Score(p1Score, homeTeam) {
		setTeam1Score(p1Score);
		setHomeTeam(homeTeam);
	}
	function handleAddP2Score(p2Score, awayTeam) {
		setTeam2Score(p2Score);
		setAwayTeam(awayTeam);
	}
	function handleAddScoreBoard(score) {
		setScoreBoard((scores) => [...scores, score]);
	}
	function handleUpdateRanking(newStats) {
		setRanking(newStats);
	}
	// Update ranking
	// function handleUpdateRanking(newResult, team1) {
	// 	const newRanking = ranking.map((team) => {
	// 		if (team.teamName === team1) {
	// 			console.log(`Home team: ${team1}`);
	// 			console.log(`Updated team stats: ${newResult}`);
	// 			return { ...team, team: newResult };
	// 		} else {
	// 			return team;
	// 		}
	// 	});
	// 	setRanking(newRanking);
	// }
	function handleRankingRerender() {
		setRanking((ranking) => ranking);
	}

	return (
		<div className="app">
			<Header />
			<TeamsList teams={ranking} scoreBoard={scoreBoard} />
			<ScoreForm
				clubs={club}
				onSelectClub={handleSelectClub}
				ranking={ranking}
				onUpdateRanking={handleUpdateRanking}
				onRankingRender={handleRankingRerender}
				onSelectTeam1={handleSelectPlayer1}
				onSelectTeam2={handleSelectPlayer2}
				homeTeam={homeTeam}
				awayTeam={awayTeam}
				team1={team1}
				team2={team2}
				team1Score={team1Score}
				team2Score={team2Score}
				onAddP1Score={handleAddP1Score}
				onAddP2Score={handleAddP2Score}
				onAddScore={handleAddScoreBoard}
				onAddTeam={handleAddTeam}
			/>
			<ScoreBoard scoreBoard={scoreBoard} />
		</div>
	);
}
export default App;
