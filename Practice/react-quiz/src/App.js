import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./Loader";
import ErrorComponent from "./Error";
import StartScreen from "./components/StartScreen";

function App() {
	// The states(status) the application can be in:
	// "loading", "error", "ready", "active", "finish"
	// status will tell the application where exactly we are at.

	// states
	const initialState = {
		questions: [],
		status: "isLoading",
	};
	// Derived states

	const [{ questions, status }, dispatch] = useReducer(reducer, initialState);

	const numQuestions = questions.length;
	console.log(numQuestions);

	function reducer(state, action) {
		switch (action.type) {
			case "dataReceived":
				return {
					...state,
					questions: action.payload, // render 'data' into the questions ara
					status: "ready", // change the status to "ready"
				};
			case "errorFetchingData":
				return {
					...state,
					status: "error",
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
				{status === "ready" && <StartScreen numQuestions={numQuestions} />}
			</Main>
		</div>
	);
}
export default App;
