function Output({ bill, tip, total, onTotal, onReset }) {
	return (
		<>
			{/* You pay ${total} (${bill} + ${tip}) */}
			{total > 0 ? (
				<p>{`You pay: $${total} ($${bill} + $${tip})`}</p>
			) : (
				<p>no Total </p>
			)}

			<button onClick={onTotal}>Calculate Total</button>
			<button onClick={onReset}>Reset</button>
		</>
	);
}

export default Output;
