import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import Main from "./components/Main";
import ErrorComp from "./components/ErrorComp";
import Loading from "./components/Loading";
import NextButton from "./components/NextButton";

function App() {
	// Handlers

	const initialState = {
		questions: [],
		status: "loading",
		index: 0,
		answer: null,
		points: 0,
		errorMessage: "",
	};
	// @ts-ignore
	const [{ questions, status, index, answer, errorMessage }, dispatch] =
		useReducer(reducer, initialState);

	// @ts-ignore
	function reducer(state, action) {
		switch (action.type) {
			case "DataFetchingSuccessful":
				return {
					...state,
					status: "ready",
					questions: action.payload,
				};
			case "ErrorFetchingData":
				return {
					...state,
					status: "error",
				};
			case "newAnswer":
				// @ts-ignore
				const question = state.questions.at(state.index);
				return {
					...state,
					answer: action.payload,
					points:
						action.payload === question.correctOption
							? state.points + question.points
							: state.points,
				};
			case "errorFetchingData":
				return {
					...state,
					status: "error",
					// errorMessage: action.payload,
				};
			case "nextQuestion":
				return {
					...state,
					index: state.index + 1,
				};
			default:
				return "Undefined case";
		}
	}
	useEffect(function () {
		const url = "http://localhost:4000/questions";
		async function getQuestions() {
			try {
				const response = await fetch(url);
				const data = await response.json();

				dispatch({ type: "DataFetchingSuccessful", payload: data });
			} catch (err) {
				dispatch({ type: "ErrorFetchingData", payload: "No Connection" });
			} finally {
			}
		}
		getQuestions();
	}, []);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "loading" && <Loading />}
				{status === "error" && <ErrorComp />}
				{status === "ready" && (
					<>
						<Question
							question={questions[index]}
							answer={answer}
							dispatch={dispatch}
						/>
						<NextButton dispatch={dispatch} />
					</>
				)}
			</Main>
		</div>
	);
}
export default App;
