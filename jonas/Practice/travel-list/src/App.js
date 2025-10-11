import { useState } from "react";

// Child components
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

// Styling
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
export default App;
