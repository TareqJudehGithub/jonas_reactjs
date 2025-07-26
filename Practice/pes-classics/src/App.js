import { useState } from "react";
import "./App.css";
import {
	Container,
	CardImg,
	Card,
	CardTitle,
	CardText,
	CardBody,
	FormControl,
	FormText,
	Button,
} from "react-bootstrap";

let playerData = [
	{
		id: 1,
		playerName: "Bebeto",
		playerImg: "images/brazil/bebeto.png",
		cardImg: "images/cards/card-stad2.jpg",
		playerCountry: "Brazil",
	},
	{
		id: 2,
		playerName: "Eder",
		playerImg: "images/brazil/eder.png",
		cardImg: "images/cards/card-stad2.jpg",
		playerCountry: "Brazil",
	},
	{
		id: 3,
		playerName: "Garrincha",
		playerImg: "images/brazil/garrincha.png",
		cardImg: "images/cards/card-stad2.jpg",
		playerCountry: "Brazil",
	},
	{
		id: 4,
		playerName: "Jairzinho",
		playerImg: "images/brazil/jairzinho.png",
		cardImg: "images/cards/card-stad2.jpg",
		playerCountry: "Brazil",
	},
	{
		id: 5,
		playerName: "Pele",
		playerImg: "images/brazil/Pele.png",
		cardImg: "images/cards/card-stad2.jpg",
		playerCountry: "Brazil",
	},
	{
		id: 6,
		playerName: "Zico",
		playerImg: "images/brazil/zico.png",
		cardImg: "images/cards/card-stad2.jpg",
		playerCountry: "Brazil",
	},
];
// Parent component
function App() {
	return (
		<div className="App">
			<Header />
			<PlayesList />
		</div>
	);
}

// Child Component

// Header
function Header() {
	return (
		<div>
			<Form />
		</div>
	);
}

function Form() {
	const [name, setName] = useState("");
	const [country, setCountry] = useState("");
	const [image, setImage] = useState("");

	// Handlers
	function handleSubmit(e) {
		e.preventDefault();

		if (!name) return alert("Enter a name!");

		console.log(`${name} ${country} ${image}`);

		// Trying here to save form inputs to a new object
		const newPlayer = {
			id: 4,
			playerName: name,
			playerCountry: country,
			playerImg: image,
		};
		const updatedPlayersData = [...playerData, newPlayer];
		console.log(updatedPlayersData);

		// Reset field values
		setName("");
		setCountry("");
		setImage("");
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
							value={image}
							onChange={(e) => setImage(e.target.value)}
						/>
					</div>
					<div className="mb-3 col-sm-1">
						<Button
							className="btn-warning"
							type="submit"
							onClick={() => console.log("Clicking ADD button!")}
						>
							Add
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
}
// Players List Container
function PlayesList() {
	return (
		<Container className="container text-center">
			<ul className="row justify-content-evenly align-items-center">
				{playerData.map((player) => (
					<PlayerCard key={player.id} playerObj={player} />
				))}
			</ul>
		</Container>
	);
}
// Players Card
function PlayerCard({ playerObj }) {
	const { id, playerName, playerImg, playerCountry, cardImg } = playerObj;
	const [selectedCard, setSelectedCard] = useState(null);

	// Handlers
	function handleClick(id) {
		console.log(`Clicking on card! ${playerName}`);
		return setSelectedCard(id !== selectedCard ? id : null);
	}

	return (
		<li className="col-lg-3 col-md-6 col-sm-6">
			<Card className="player-card" onClick={() => handleClick(id)}>
				{id === selectedCard ? (
					<CardBody className="card-body">
						<CardImg
							className="rounded img-thumbnail"
							src={playerImg}
							alt={playerName}
						/>
						<CardTitle className="card-title">
							<span>{playerName}</span> - <span>{playerCountry}</span>
						</CardTitle>
					</CardBody>
				) : (
					<CardBody className="card-body">
						<CardImg
							className="rounded img-thumbnail"
							src={cardImg}
							alt="card"
						/>
					</CardBody>
				)}
			</Card>
		</li>
	);
}

// Footer

export default App;
