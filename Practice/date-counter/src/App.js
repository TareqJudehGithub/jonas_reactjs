import { useState } from "react";
function App() {
	return <Counter />;
}
// components
function Counter() {
	const [count, setCount] = useState(0);
	const [step, setStep] = useState(1);

	const dateToday = new Date();
	dateToday.setDate(dateToday.getDate() + count);
	// Steps
	function handleStepMinus() {
		if (step > 1) {
			return setStep((s) => s - 1);
		}
		// }
	}
	function handleStepPlus() {
		if (step < 30 && count < 30) {
			return setStep((s) => s + 1);
		}
	}
	function handleStepReset() {
		return setStep((s) => (s = 1));
	}

	// Counts
	function handleCountMinus() {
		return setCount((c) => c - step);
	}
	function handleCountPlus() {
		if (count < 365) {
			return setCount((c) => c + step);
		}
	}
	function handleCountReset() {
		return setCount((c) => (c = 0));
	}

	return (
		<div className="container">
			<p>
				<button onClick={handleStepMinus}>-</button>
				<span>Step: {step} </span>
				<button onClick={handleStepPlus}>+</button>
				<button className="reset" onClick={handleStepReset}>
					Reset
				</button>
			</p>
			<p>
				<button onClick={handleCountMinus}>-</button>
				<span>Count: {count}</span>
				<button onClick={handleCountPlus}>+</button>

				<button className="reset" onClick={handleCountReset}>
					Reset
				</button>
			</p>
			<p>
				{count === 0 ? "Today is " : ""} {dateToday.toDateString()}
			</p>
		</div>
	);
}

export default App;
