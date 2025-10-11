import { useState } from "react";
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
export default Form;
