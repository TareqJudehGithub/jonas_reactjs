import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
	// States
	const initialState = {
		questions: [],

		// The states(status) the application can be in: "loading", "error", "ready", "active", "finish"
		status: "loading", // status will tell the application where exactly we are at.
	};

	function reducer(state, action) {
		switch (action.type) {
			case "dataReceived":
				return {
					...state,
					question: action.payload,
					status: "ready",
				};
			case "dataFailed":
				return {
					...state,
					status: "error",
				};

			default:
				throw new Error("Action unknown");
		}
	}

	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(function () {
		const url = "http://localhost:8000/questions";

		async function getQuestions() {
			try {
				const response = await fetch(url);
				const data = await response.json();

				// dataReceived is the data we just received right after fetch
				dispatch({ type: "dataReceived", payload: data });
			} catch (err) {
				dispatch({
					type: "dataFailed",
				});
			}
		}
		getQuestions();
	}, []);

	return (
		<div className="app">
			<Header />
			<Main>
				<p>1/15</p>
				<p>Question?</p>
			</Main>
		</div>
	);
}
export default App;
