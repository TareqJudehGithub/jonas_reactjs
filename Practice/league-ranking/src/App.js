import { useReducer, useState } from "react";
import Header from "./components/Header";
import TeamsList from "./components/TeamsList";
import ScoreForm from "./components/ScoreForm";
import ScoreBoard from "./components/ScoresBoard";

import teamsData from "./playersData";
import ErrorAlert from "./components/ErrorAlert";

function App() {
	// States
	const [club, setClub] = useState(teamsData);
	const [ranking, setRanking] = useState([]);
	const [scoreBoard, setScoreBoard] = useState([]);

	const [team1Score, setTeam1Score] = useState(0);
	const [team2Score, setTeam2Score] = useState(0);

	const [homeTeam, setHomeTeam] = useState("");
	const [awayTeam, setAwayTeam] = useState("");

	const [team1, setTeam1] = useState("home");
	const [team2, setTeam2] = useState("away");

	const [teamsTable, setTeamsTable] = useState([]);

	const initialState = {
		status: "ready",
		errorMessage: "",
	};

	const [{ status, errorMessage }, dispatch] = useReducer(
		reducer,
		initialState
	);

	function reducer(state, action) {
		switch (action.type) {
			case "allGood!":
				return {
					...state,
					status: "ready",
				};
			case "errorAddingTeam":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};
			case "errorNoTeamToAdd":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};
			case "errorSelectHomeTeam":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};
			case "errorSelectAwayTeam":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};
			case "errorSelectBothTeams":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};
			case "errorDifferentTeams":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};

			case "errorNegativeScore":
				return {
					...state,
					status: "error",
					errorMessage: action.payload,
				};
			default:
				throw new Error("reducer failed error.");
		}
	}
	// Handles

	function handleResetClub() {
		setClub((clubs) => (clubs = teamsData));
	}
	function handleAddTeam(team) {
		setRanking((teams) => [...teams, team]);
		setTeamsTable((teams) => [...teams, team.teamName]);
		dispatch({ type: "allGood!" });
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
		setTeam1("home");
		setTeam2("away");
		setTeam1Score(0);
		setTeam2Score(0);

		dispatch({ type: "allGood!" });
	}
	function handleUpdateRanking(newStats) {
		setRanking(newStats);
	}

	function handleRankingRerender() {
		setRanking((ranking) => ranking);
	}
	function handleTeamsTableRender() {
		setTeamsTable((teams) => teams);
		teamsTable.map((teams) => console.log(teams));
	}

	return (
		<div className="app">
			<Header />
			<TeamsList teams={ranking} />
			<ScoreForm
				clubs={club}
				onResetClub={handleResetClub}
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
				teamsTable={teamsTable}
				onTeamsTableRender={handleTeamsTableRender}
				scoreBoard={scoreBoard}
				dispatch={dispatch}
			/>
			{status === "error" && (
				<ErrorAlert status={status}>{errorMessage}</ErrorAlert>
			)}
			<ScoreBoard scoreBoard={scoreBoard} />
		</div>
	);
}
export default App;
