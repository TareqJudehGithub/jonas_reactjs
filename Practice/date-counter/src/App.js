import { useState } from "react";
function App() {
	return <Counter />;
}
// components
function Counter() {
	const [count, setCount] = useState(0);
	const [range, setRange] = useState(1);

	const dateToday = new Date();
	dateToday.setDate(dateToday.getDate() + count);
	// Steps

	function handleStepReset(e) {
		setRange((s) => (s = 1));
	}

	// Counts
	function handleCountMinus() {
		return setCount((c) => c - range);
	}
	function handleCountPlus() {
		if (count < 365) {
			return setCount((c) => c + range);
		}
	}
	function handleCountReset() {
		return setCount((c) => (c = 0));
	}

	return (
		<div className="container">
			{/* Steps UI */}
			<p>
				<input
					type="range"
					min="0"
					max="10"
					value={range}
					onChange={(e) => setRange(Number(e.target.value))}
				/>
				<span>Step(s): {range} </span>
				<button className="reset" onClick={handleStepReset}>
					Reset
				</button>
			</p>

			<p>
				<button onClick={handleCountMinus}>-</button>
				<input
					type="text"
					value={count}
					onChange={(e) => setCount(Number(e.target.value))}
				/>
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

/*  
buttons solution

const [step, setStep] = useState(0);

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
	function handleStepReset(e) {
		//setStep((s) => (s = 1));
		setRange((s) => (s = 1));
	}

<button onClick={handleStepMinus}>-</button> 
<span>Step(s): {step} </span>
<button onClick={handleStepPlus}>+</button> 

<button onClick={ handleCountMinus }>-</button>				
				<span>Count: {count}</span>
				<button onClick={handleCountPlus}>+</button>

*/
