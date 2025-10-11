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
export default Stats;
