import { useState } from "react";
// Childs
import Item from "./Item";

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
			.sort((a, b) => Number(b.packed) - Number(a.packed));
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
export default PackingList;
