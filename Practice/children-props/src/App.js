function App() {
	const card = {
		title: "Card static name",
		body: "Card static body",
		email: "Card static email",
	};

	return (
		<div>
			<Card card={card} />

			<CardTemplate cardType={"Mastercard"}>
				<h4>
					<Card card={card} />
					<p>Addition to the Mastercard only</p>
				</h4>
			</CardTemplate>
		</div>
	);
}

// Custom functions
function CardTemplate({ cardType, children }) {
	return (
		<div>
			<h2>{cardType}</h2>
			{children}
		</div>
	);
}
export default App;

function Card(props) {
	return (
		<div>
			<h3>{props.card.title}</h3>
			<h4>{props.card.body}</h4>
			<h5>{props.card.email}</h5>
		</div>
	);
}
