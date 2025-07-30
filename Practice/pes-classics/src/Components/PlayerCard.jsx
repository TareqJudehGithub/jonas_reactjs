import { useState, Suspense } from "react";

import { CardImg, Card, CardTitle, CardBody, Button } from "react-bootstrap";

function PlayerCard({ playerObj, onDelPlayer }) {
	const { playerName, playerImg, playerCountry, cardImg } = playerObj;
	const [selectedCard, setSelectedCard] = useState(null);

	// Handlers
	function handleClick(id) {
		// Update selected card state with the player id we click on.
		return setSelectedCard(id !== selectedCard ? id : null);
	}

	return (
		<li className="col-lg-3 col-md-6 col-sm-6">
			<Card
				className="player-card"
				onClick={() => handleClick(playerObj.id)}
				style={{ backgroundColor: "rgba(13, 115, 199, 0.23)" }}
			>
				{/* If id matches, Show card (players details), else (click again) then
				show back of the card  */}
				{playerObj.id === selectedCard ? (
					<Suspense>
						<CardBody className="card-body">
							<CardImg
								className="rounded img-thumbnail"
								src={playerImg}
								alt={playerName}
							/>
							<CardTitle className="card-title">
								<span>
									{playerName} - {playerCountry}
								</span>
							</CardTitle>
						</CardBody>
					</Suspense>
				) : (
					<CardBody className="card-body">
						<CardImg
							className="rounded img-thumbnail"
							src={cardImg}
							alt="card"
						/>
					</CardBody>
				)}
				<Button
					className="btn btn-sm btn-warning"
					onClick={() => onDelPlayer(playerObj.id)}
					style={{ opacity: "0.8", color: "whitesmoke", fontWeight: "bold" }}
				>
					Withdraw
				</Button>
			</Card>
		</li>
	);
}
export default PlayerCard;
