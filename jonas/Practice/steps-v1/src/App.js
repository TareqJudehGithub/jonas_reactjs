import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];
export default function App() {
	return (
		<>
			<Steps />
		</>
	);
}

// Component
function Steps() {
	// Hooks
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	// Handlers
	function handlePrevious() {
		if (step > 1) {
			return setStep((s) => s - 1);
		}
	}

	function handleNext() {
		if (step < 3) {
			return setStep((s) => s + 1);
		}
	}

	// UI render
	return (
		<>
			{/* Extend/collapse button  */}
			<button className="close" onClick={() => setIsOpen((s) => !s)}>
				&times;
			</button>
			{isOpen ? (
				<div className="steps">
					<div className="numbers">
						<div className={step >= 1 ? "active" : ""}>1</div>
						<div className={step >= 2 ? "active" : ""}>2</div>
						<div className={step >= 3 ? "active" : ""}>3</div>
					</div>
					<p className="message">
						step ${step}: {messages[step - 1]}
					</p>

					<div className="buttons">
						<button onClick={handlePrevious}>
							<span>Previous</span>
						</button>

						<button onClick={handleNext}>
							<span>Next</span>
						</button>
					</div>
				</div>
			) : (
				<p className="collapsed">
					UI collapsed! <br></br>Press X to show UI once again!
				</p>
			)}
		</>
	);
}

//export default App;
