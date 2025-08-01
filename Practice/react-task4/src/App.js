import Login from "./Login";
import "./App.css";
import Home from "./Home";
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const name = "John Smith";
	// Handles
	function handleToggleLogIn() {
		console.log(isLoggedIn);
		return setIsLoggedIn(!isLoggedIn);
	}
	return (
		<>
			<div className="container bg-light container-app">
				{isLoggedIn ? <Navigate to={"/home"} /> : <Navigate to={"/login"} />}

				<Routes>
					<Route
						path="/login"
						element={<Login onToggleLogin={handleToggleLogIn} name={name} />}
					/>
					<Route
						path="/home"
						element={<Home onToggleLogin={handleToggleLogIn} name={name} />}
					/>
				</Routes>
			</div>
		</>
	);
}

export default App;
