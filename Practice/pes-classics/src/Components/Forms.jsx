import { useState } from "react";
import playersData from "../data";
import { FormControl, Button } from "react-bootstrap";

function Form({ onAddPlayer }) {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [cardImage, setCardImage] = useState("images/cards/card-stad2.jpg");
	const [playerImage, setPlayerImage] = useState("");

	// Handlers

	function handleSubmit(e) {
		e.preventDefault();

		if (!name) return alert("Enter a name!");

		console.log(`${name} ${country} ${cardImage} ${playerImage}`);

		// Build/create the new object after submitting the form
		const newPlayer = {
			id: playersData.length + 1,
			playerName: name,
			playerCountry: country,
			CardImg: cardImage,
			playerImg: playerImage,
		};
		console.log(`New Player Data: ${newPlayer}`);
		onAddPlayer(newPlayer);
		console.log(`Original Data: ${playersData}`);

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
