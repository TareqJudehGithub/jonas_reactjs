import { useState, useEffect } from "react";
import playersData from "../data";
import { FormControl, Button, Alert } from "react-bootstrap";

function Form({ onAddPlayer }) {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [cardImage, setCardImage] = useState("images/cards/card-stad2.jpg");
	const [playerImage, setPlayerImage] = useState("");

	// Handlers
	function handleSubmit(e) {
		e.preventDefault();
		if (!name) return alert("Enter a name!");

		var uniqueKey; // a variable to save key value
		do {
			alert("Press Ok button to add a new player");
			uniqueKey = Math.trunc(Math.random() * 2000000 + 1);
			if (playersData.map((player) => player.id).includes(uniqueKey)) {
				console.log("Key duplicate found!");
				alert("Key duplicate found!");
			}
		} while (playersData.map((player) => player.id).includes(uniqueKey));

		// Build/create the new object after submitting the form
		console.log("Adding new Player!");
		const newPlayer = {
			id: uniqueKey,
			playerName: name,
			playerCountry: country,
			CardImg: cardImage,
			playerImg: playerImage,
		};
		onAddPlayer(newPlayer);

		// Reset field values
		setName("");
		setCountry("");
		setPlayerImage("");
	}

	return (
		<div className="form-comp">
			<h1>Legends Draw</h1>
			<form onSubmit={handleSubmit}>
				<div className="row g-4">
					<div className="mb-3 col-sm-2">
						<FormControl
							type="text"
							placeholder="Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							autoFocus
						/>
					</div>
					<div className="mb-3 col-sm-2">
						<FormControl
							type="text"
							value={country}
							onChange={(e) => setCountry(e.target.value)}
							placeholder="Country"
						/>
					</div>
					<div className="mb-3 col-sm-3">
						<FormControl
							type="file"
							accept="image/png"
							value={playerImage}
							onChange={(e) => setPlayerImage(e.target.value)}
						/>
					</div>
					<div className="mb-3 col-sm-1">
						<Button className="btn-warning" type="submit">
							Add
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
export default Form;
