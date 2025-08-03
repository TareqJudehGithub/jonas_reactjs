import { useState } from "react";
import "./index.css";

// Parent component
function App() {
	// States
	const [items, setItems] = useState([]);

	// Handlers
	// Add new item. Updates the state handler function, which we must also pass
	//  (as a prop) to the Form child component, where we create new items.
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
	// Clear all list
	function handleClearList() {
		const confirmed = window.confirm("Clear list?");

		if (confirmed) {
			console.log("Clearing List!");
			setItems([]);
		}
	}
	return (
		<div className="app">
			<Logo />
			{/* Naming Convection for naming handle props*/}
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onToggleItem={handleUpdateItem}
				onDelItem={handleDeleteItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
// Child components
function Logo() {
	return <h1>🌴Far Away🎒</h1>;
}

// The purpose of Form component is to add new items into the array (update the state),
// but not to render it (the UI).
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
				placeholder="Item description..."
				autoFocus
			/>
			<button>Add</button>
		</form>
	);
}

function PackingList({ items, onToggleItem, onDelItem, onClearList }) {
	// Sort logic
	const [sortBy, setSortBy] = useState("input");

	let sortedItems;
	if (sortBy === "input") {
		sortedItems = items; // default order
		// Sort alphabetically
	} else if (sortBy === "description") {
		sortedItems = items
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
		// Sorty by status: packed or not packed yet
	} else if (sortBy === "packed") {
		sortedItems = items
			.slice()
			// Convert to Number() since packed is a boolean
			.sort((a, b) => Number(a.packed) - Number(b.packed));
	}

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						listItems={item}
						onDelItem={onDelItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by status</option>
				</select>
				<button onClick={onClearList}>Clear List</button>
			</div>
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

function Stats({ items }) {
	// Derived states
	// Calculate total numbers of items in list
	const numItems = items.length;

	// total packed items (using filter() creates new array ofc)
	const numPacked = items.filter((item) => item.packed).length;
	const numPercentage = Math.round((numPacked / numItems) * 100);

	return (
		<footer className="stats">
			{numPercentage === 100 ? (
				<p>Alright! We good to go!</p>
			) : numItems && numPacked ? (
				<p>
					You have {numItems} item(s) on your list, and you already packed{" "}
					{numPacked} items and %{numPercentage} of your total items.
				</p>
			) : (
				<p>No items packed yet</p>
			)}
		</footer>
	);
}

export default App;
