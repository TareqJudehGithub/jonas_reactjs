import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

import Loader from "./Loader";
import ErrorComponent from "./Error";
import NextButton from "./components/NextButton";
import PreviousButton from "./components/PreviousButton";
import Progress from "./components/Progress";

function App() {
	// The states(status) the application can be in:
	// "loading", "error", "ready", "active", "finish"
	// status will tell the application where exactly we are at.

	// states
	const initialState = {
		questions: [],
		status: "isLoading",
		index: 0,
		answer: null,
		points: 0,
	};

	// Derived states

	// const [state, dispatch] = useReducer(reducer, initialState);
	// const { questions, status, index } = state; or we could destruct them directly

	const [{ questions, status, index, answer, points }, dispatch] = useReducer(
		reducer,
		initialState
	);

	const numQuestions = questions.length;

	// Calculate total points for all questions

	// - Using old school for loop
	// let pointsTotal = 0;
	// for (let i = 0; i < questions.length; i++) {
	// 	pointsTotal += questions[i].points;
	// }

	// using reduce()
	let pointsTotal = questions.reduce((acc, cur) => acc + cur.points, 0);

	// @ts-ignore
	function reducer(state, action) {
		switch (action.type) {
			case "errorFetchingData":
				return {
					...state,
					status: "error",
				};
			case "dataReceived":
				return {
					...state,
					questions: action.payload, // render 'data' into the questions ara
					status: "ready", // change the status to "ready"
				};
			case "start":
				return {
					...state,
					status: "active",
				};
			case "newAnswer":
				const question = state.questions.at(state.index);

				return {
					...state,
					answer: action.payload,
					points:
						action.payload === question.correctOption
							? state.points + question.points
							: state.points,
				};
			case "nextQuestion":
				return {
					...state,
					index: state.index + 1,
					answer: null,
				};
			case "previousQuestion":
				return {
					...state,
					index: state.index - 1,
					answer: null,
				};

			default:
				throw new Error("Error - Default");
		}
	}

	useEffect(function () {
		async function getData() {
			try {
				const url = fetch("http://localhost:5000/questions");

				const response = await url;
				const data = await response.json();
				//	console.log(data);
				dispatch({ type: "dataReceived", payload: data });
			} catch (err) {
				dispatch({ type: "errorFetchingData" });
			}
		}
		getData();
	}, []);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "isLoading" && <Loader />}
				{status === "error" && <ErrorComponent />}
				{status === "ready" && (
					<StartScreen numQuestions={numQuestions} dispatch={dispatch} />
				)}
				{status === "active" && (
					<>
						<Progress
							index={index}
							numQuestions={numQuestions}
							points={points}
							pointsTotal={pointsTotal}
						/>
						<Question
							question={questions[index]}
							dispatch={dispatch}
							answer={answer}
						/>
						<NextButton dispatch={dispatch} answer={answer} />
						<PreviousButton dispatch={dispatch} answer={answer} />
					</>
				)}
			</Main>
		</div>
	);
}
export default App;
