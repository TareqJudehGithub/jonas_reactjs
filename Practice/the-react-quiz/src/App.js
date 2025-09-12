import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import Main from "./components/Main";

function App() {
	// Handlers

	const initialState = {
		questions: [],
		status: "isLoading",
		index: 0,
		answer: null,
		points: 0,
	};
	const [{ questions, status, index, answer, points }, dispatch] = useReducer(
		reducer,
		initialState
	);
	console.log(answer);

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
				return {
					...state,
					answer: action.payload,
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
				console.log(data);
				dispatch({ type: "DataFetchingSuccessful", payload: data });
			} catch (err) {
				dispatch({ type: "ErrorFetchingData" });
			} finally {
			}
		}
		getQuestions();
	}, []);

	return (
		<div className="app">
			<Header />
			<Main>
				{status === "ready" && (
					<Question
						question={questions[index]}
						answer={answer}
						dispatch={dispatch}
					/>
				)}
			</Main>
		</div>
	);
}
export default App;
