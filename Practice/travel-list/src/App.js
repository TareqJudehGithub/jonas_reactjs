import { useState } from "react";
import "./index.css";

const initialItems = [
	{ id: 1, description: "Passports", quantity: 2, packed: false },
	{ id: 2, description: "Socks", quantity: 12, packed: false },
	{ id: 3, description: "Charger", quantity: 1, packed: true },
];

// Parent component
function App() {
	return (
		<div className="app">
			<Logo />
			<Form />
			<PackingList />
			<Stats />
		</div>
	);
}

// Child components
function Logo() {
	return <h1>🌴Far Away🎒</h1>;
}

function Form() {
	// States
	const [description, setDescription] = useState("");
	const [quantity, setQuantity] = useState(1);

	// Handlers
	function handleSubmit(e) {
		e.preventDefault();

		// form inputs validation
		if (!description) {
			alert("Enter item name!");
		}

		// const newItem = { description, quantity, packed: false, id: Date.now() };
		// console.log(newItem);
		console.log(description, quantity);

		// Setting the description state back to its initial state.
		setDescription("");
		setQuantity(1);
	}

	return (
		//<form className="add-form" onSubmit={ handleSubmit }>
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			<select
				value={quantity}
				onChange={(e) => setQuantity(Number(e.target.value))}
			>
				{Array.from({ length: 20 }, (value, index) => index + 1).map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>

			<input
				type="text"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
				placeholder="item..."
				autoFocus
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList() {
	return (
		<div className="list">
			<ul>
				{initialItems.map((item) => (
					<Item key={item.id} itemsObj={item} />
				))}
			</ul>
		</div>
	);
}

function Item({ itemsObj }) {
	const { description, quantity, packed } = itemsObj;
	return (
		<li>
			<span
				style={packed ? { textDecoration: "line-through" } : { color: "red" }}
			>
				{quantity} {description}
			</span>
			<button>❌</button>
		</li>
	);
}

function Stats() {
	return (
		<footer className="stats">
			You have (X) item(s) on your list, and you already packed (X%)
		</footer>
	);
}

export default App;
