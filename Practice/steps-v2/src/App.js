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
			<StepMessage step={1}>
				<p>Pass in content</p>
				<p>!</p>
			</StepMessage>
			<StepMessage step={2}>
				<p>Read the children prop</p>
				<p>!</p>
			</StepMessage>
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

					<StepMessage step={step}>
						{messages[step - 1]}
						<div className="buttons">
							<Button
								bgColor="#e7e7e7"
								textColor="#fff"
								onClick={() => alert("Learn how to reuse components")}
							>
								<span>🤔 Reusable Button</span>
							</Button>
						</div>
					</StepMessage>
					<div className="buttons">
						<Button
							bgColor="#7950f2"
							textColor="#fff"
							onClick={handlePrevious}
						>
							<span>👈</span> Previous
						</Button>
						<Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
							Next <span>👉</span>
						</Button>
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

// Custom components
function StepMessage({ step, children }) {
	return (
		<div className="message">
			<h3>Step {step}</h3>
			{children}
		</div>
	);
}

function Button({ textColor, bgColor, onClick, children }) {
	// Button props
	return (
		<button
			style={{ backgroundColor: bgColor, color: textColor }}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
