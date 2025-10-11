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
	// const [ranking, setRanking] = useState([]);
	// const [teamsTable, setTeamsTable] = useState([]);
	// const [team1, setTeam1] = useState("home");
	// const [team2, setTeam2] = useState("away");
	// const [team1Score, setTeam1Score] = useState(0);
	// const [team2Score, setTeam2Score] = useState(0);
	//const [homeTeam, setHomeTeam] = useState("");
	//const [awayTeam, setAwayTeam] = useState("");

	//const [scoreBoard, setScoreBoard] = useState([]);

	const initialState = {
		status: "ready",
		errorMessage: "",
		ranking: [],
		teamsTable: [],
		team1: "home",
		team2: "away",
		team1Score: 0,
		team2Score: 0,
		scoreBoard: [],
	};

	const [
		{
			status,
			errorMessage,
			ranking,
			teamsTable,
			team1,
			team2,
			team1Score,
			team2Score,
			scoreBoard,
		},
		dispatch,
	] = useReducer(
		// const [{ status, errorMessage }, dispatch] = useReducer(
		reducer,
		initialState
	);

	// @ts-ignore
	function reducer(state, action) {
		switch (action.type) {
			case "allGood!":
				return {
					...state,
					status: "ready",
					errorMessage: "",
				};
			case "addTeamToTable":
				return {
					...state,
					ranking: action.payload,
				};
			case "addSelectedTeam":
				return {
					...state,
					teamsTable: action.payload,
				};
			case "selectTeam1":
				return {
					...state,
					team1: action.payload,
				};
			case "selectTeam2":
				return {
					...state,
					team2: action.payload,
				};
			case "team1Score":
				return {
					...state,
					team1Score: action.payload,
				};
			case "team2Score":
				return {
					...state,
					team2Score: action.payload,
				};
			case "setScore":
				return {
					...state,
					scoreBoard: action.payload,
				};
			case "resetTeams":
				return {
					...state,
					team1: "home",
					team2: "away",
					team1Score: 0,
					team2Score: 0,
				};
			case "restart":
				return {
					...state,
					status: "ready",
					errorMessage: "",
					ranking: [],
					teamsTable: [],
					team1: "home",
					team2: "away",
					team1Score: 0,
					team2Score: 0,
					scoreBoard: [],
				};
			case "updateTeamRank":
				return {
					...state,
					ranking: action.payload,
				};
			case "updateTableRank":
				return {
					state,
					ranking: state.ranking,
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
				throw new Error("Error: Undefined reducer type.");
		}
	}
	// Handles

	// @ts-ignore
	function handleAddTeam(team) {
		// @ts-ignore
		//setRanking((teams) => [...teams, team]);
		dispatch({ type: "addTeamToTable", payload: [...ranking, team] });
		// @ts-ignore
		// setTeamsTable((teams) => [...teams, team.teamName]);
		dispatch({
			type: "addSelectedTeam",
			payload: [...teamsTable, team.teamName],
		});
		dispatch({ type: "allGood!" });
	}

	// @ts-ignore
	function handleSelectPlayer1(p1) {
		// setTeam1(p1);
		dispatch({ type: "selectTeam1", payload: p1 });
	}
	// @ts-ignore
	function handleSelectPlayer2(p2) {
		// setTeam2(p2);
		dispatch({ type: "selectTeam2", payload: p2 });
	}
	// @ts-ignore
	function handleAddP1Score(p1Score, homeTeam) {
		//	setTeam1Score(p1Score);
		dispatch({ type: "team1Score", payload: p1Score });

		//	setHomeTeam(homeTeam);
	}
	// @ts-ignore
	function handleAddP2Score(p2Score, awayTeam) {
		//	setTeam2Score(p2Score);
		dispatch({ type: "team2Score", payload: p2Score });

		//	setAwayTeam(awayTeam);
	}
	// @ts-ignore
	function handleAddScoreBoard(score) {
		// @ts-ignore
		// setScoreBoard((scores) => [...scores, score]);
		// Reset Teams and score
		// setTeam1("home");
		// setTeam2("away");
		// setTeam1Score(0);
		// setTeam2Score(0);
		dispatch({ type: "setScore", payload: [...scoreBoard, score] });
		dispatch({ type: "resetTeams" });
		dispatch({ type: "allGood!" });
	}

	// @ts-ignore
	function handleUpdateRanking(newStats) {
		//	setRanking(newStats);
		dispatch({ type: "updateTeamRank", payload: newStats });
	}

	// function handleResetClub() {
	// 	setClub((clubs) => (clubs = teamsData));
	// }

	// function handleRankingRerender() {
	// 	// setRanking((ranking) => ranking);
	// 	dispatch({ type: "updateTableRank", payload: ranking });
	// }

	// function handleTeamsTableRender() {
	// 	setTeamsTable((teams) => teams);
	// 	teamsTable.map((teams) => console.log(teams));
	// }

	return (
		<div className="app">
			<Header />
			<TeamsList leagueTable={ranking} />
			<ScoreForm
				clubs={club}
				ranking={ranking}
				onSelectTeam1={handleSelectPlayer1}
				onSelectTeam2={handleSelectPlayer2}
				team1={team1}
				team2={team2}
				team1Score={team1Score}
				onUpdateRanking={handleUpdateRanking}
				team2Score={team2Score}
				onAddP1Score={handleAddP1Score}
				onAddP2Score={handleAddP2Score}
				onAddScore={handleAddScoreBoard}
				onAddTeam={handleAddTeam}
				teamsTable={teamsTable}
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
