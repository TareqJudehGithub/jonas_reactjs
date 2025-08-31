import { useState } from "react";
import Header from "./components/Header";
import PlayersList from "./components/PlayersList";
import playerData from "./playersData";

import ScoreForm from "./components/ScoreForm";
import scoresData from "./components/scoresData";

function App() {
	// States
	const [ranking, setRanking] = useState(playerData);
	const [Player1Score, setPlayer1Score] = useState(0);
	const [Player2Score, setPlayer2Score] = useState(0);
	const [scoreBoard, setScoreBoard] = useState(scoresData);
	const [homeTeam, setHomeTeam] = useState("");
	const [awayTeam, setAwayTeam] = useState("");

	const [Player1Name, setPlayer1Name] = useState("");
	const [Player2Name, setPlayer2Name] = useState("");
	const [points, setPoints] = useState("");
	const [win, setWin] = useState("");
	const [draw, setDraw] = useState("");
	const [loss, setLoss] = useState("");
	const [goalsFor, setGoalsFor] = useState("");
	const [goalsAgainst, setGoalsAgainst] = useState("");
	const [goalsDifference, setGoalsDifference] = useState("");
	// Handles

	function handleSelectPlayer1(p1) {
		setPlayer1Name(p1);
	}
	function handleSelectPlayer2(p2) {
		setPlayer2Name(p2);
	}
	function handleAddP1Score(p1Score, homeTeam) {
		setPlayer1Score(p1Score);
		setHomeTeam(homeTeam);
	}
	function handleAddP2Score(p2Score, awayTeam) {
		setPlayer2Score(p2Score);
		setAwayTeam(awayTeam);
	}
	function handleAddScoreBoard(score) {
		setScoreBoard((scores) => [...scores, score]);
	}

	return (
		<div className="app">
			<Header />
			<PlayersList players={ranking} />
			<ScoreForm
				players={ranking}
				onSelectPlayer1={handleSelectPlayer1}
				onSelectPlayer2={handleSelectPlayer2}
				player1Name={Player1Name}
				player2Name={Player2Name}
				player1Score={Player1Score}
				player2Score={Player2Score}
				onAddP1Score={handleAddP1Score}
				onAddP2Score={handleAddP2Score}
				scoreBoard={scoreBoard}
				onAddScore={handleAddScoreBoard}
			/>
		</div>
	);
}
export default App;
