import { useState, useEffect } from "react";

export default function App() {
	const [advice, setAdvice] = useState("");
	const [count, setCount] = useState(0);

	async function getAdvice() {
		const res = await fetch("https://api.adviceslip.com/advice");
		const data = await res.json();

		// Update the state
		setAdvice(data.slip.advice);
		setCount((c) => c + 1);
	}

	useEffect(function () {
		getAdvice();
	}, []);
	return (
		<div>
			<h1>{advice}</h1>
			<button onClick={getAdvice}>Get advice</button>
			<Message count={count} />
		</div>
	);
}

// Component
function Message(props) {
	return (
		<p>
			You have read <strong>{props.count} </strong>Pieces of advice
		</p>
	);
}
