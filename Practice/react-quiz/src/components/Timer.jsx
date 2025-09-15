import { useEffect } from "react";

// @ts-ignore
export default function Timer({ dispatch, secondsRemaining }) {
	// Convert secs to mins
	const minutes = Math.floor(secondsRemaining / 60);
	const seconds = secondsRemaining % 60; // The remainder of dividing by 60 (less than a min)

	// Timer components will mount as soon as the game starts.
	useEffect(
		function () {
			const id = setInterval(function () {
				// code
				dispatch({ type: "tick" });
			}, 1000);
			return () => clearInterval(id); // cleaning setInterval
		},
		[dispatch]
	);

	return (
		<div className="timer">
			{/* {minutes}: {seconds} */}
			Time left: {minutes < 10 ? "0" + minutes : minutes}:
			{seconds < 10 ? "0" + seconds : seconds}
		</div>
	);
}
