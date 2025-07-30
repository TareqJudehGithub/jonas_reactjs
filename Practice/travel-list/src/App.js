import { useState } from "react";
import "./index.css";

// Parent component
function App() {
	const [items, setItems] = useState([]);

	// Handlers
	// Add new item. Updates the state handler function, which we must also pass (as a prop) to
	// Form component, where we create new items.
	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	// Update/Edit an item
	function handleUpdateItem(id) {
		setItems(
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	}
	// Delete an item from the list.
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	return (
		<div className="app">
			<Logo />
			{/* Naming Convection for naming handle props*/}
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDelItem={handleDeleteItem}
				onToggleItem={handleUpdateItem}
			/>
			<Stats />
		</div>
	);
}
// Child components
function Logo() {
	return <h1>🌴Far Away🎒</h1>;
}

// The form component purpose is to add new items into the array (update the state), but
// not to render it (the UI).
function Form({ onAddItems }) {
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

		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};
		onAddItems(newItem);

		// Setting the description state back to its initial state.
		setDescription("");
		setQuantity(1);
	}

	return (
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

function PackingList({ items, onDelItem, onToggleItem }) {
	return (
		<div className="list">
			<ul>
				{items.map((item) => (
					<Item
						key={item.id}
						listItems={item}
						onDelItem={onDelItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
		</div>
	);
}

function Item({ listItems, onDelItem, onToggleItem }) {
	const { id, description, quantity, packed } = listItems;
	return (
		<li className="list-item">
			<input
				type="checkbox"
				value={packed}
				onChange={() => onToggleItem(id)}
			/>
			<span
				style={packed ? { textDecoration: "line-through" } : { color: "gold" }}
			>
				{quantity} {description}
			</span>
			<button onClick={() => onDelItem(id)}>❌</button>
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
