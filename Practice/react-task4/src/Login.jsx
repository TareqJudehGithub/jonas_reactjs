import { useState, useRef, useEffect } from "react";

function Login({ onToggleLogin }) {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const userCredentials = [
		{
			username: "admin",
			password: "1234",
		},
	];

	const name = "John Smith";
	const inputRef = useRef(null);

	// Autofocus first input field in the form
	useEffect(() => {
		return inputRef.current.focus();
	}, []);

	// Handles
	function handleSubmit(e) {
		e.preventDefault();
		if (
			username === userCredentials[0].username &&
			password === userCredentials[0].password
		) {
			// Invoke handleToggleLogIn func from App component
			onToggleLogin();

			console.log(`Welcome user, ${name}!`);
		} else {
			console.log("Invalid username/password.");
		}
	}

	return (
		<div className="">
			<h2 className="row p-3">Sign-in</h2>
			<form className="form" onSubmit={handleSubmit}>
				<div className=" row p-2">
					<input
						className="form-form-control w-50"
						type="text"
						placeholder="Enter username"
						ref={inputRef}
						autoComplete="on"
						required
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>
				<div className="row mb-1 p-2">
					<input
						className="form-form-control w-50"
						type="password"
						placeholder="Enter password"
						autoComplete="on"
						required
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<button className="row btn btn-primary m-1" type="submit">
					Login In
				</button>
			</form>
		</div>
	);
}
export default Login;
