import { useState } from "react";
import playersData from "./data";
import Form from "./Components/Forms";
import PlayerCard from "./Components/PlayerCard";

// Styling
import "./App.css";
import { Container } from "react-bootstrap";

// Parent component
function App() {
	const [data, setData] = useState(playersData);

	// Handle functions
	function handleAddPlayer(player) {
		setData((players) => [...players, player]);
	}
	function handleDelPlayer(id) {
		setData(data.filter((item) => item.id !== id));
	}

	return (
		<div className="App">
			<Form onAddPlayer={handleAddPlayer} />
			<PlayersList data={data} onDelPlayer={handleDelPlayer} />
		</div>
	);
}

// Child Components
// Players List Container
function PlayersList({ data, onDelPlayer }) {
	return (
		<Container className="container text-center">
			<ul className="row justify-content-evenly align-items-center">
				{data.map((player) => (
					<PlayerCard
						key={player.id}
						playerObj={player}
						onDelPlayer={onDelPlayer}
					/>
				))}
			</ul>
		</Container>
	);
}

// Players Card

// Footer

export default App;
