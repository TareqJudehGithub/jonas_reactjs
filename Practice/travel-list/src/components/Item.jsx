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
export default Item;
