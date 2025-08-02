function Expense({ itemsList, total, onDelItem, onUpdateItem }) {
	const { id, date, description, amount } = itemsList;
	return (
		<>
			<td>{id}</td>
			<td>{date}</td>
			<td>{description}</td>
			<td>JOD {amount}</td>
			<td>
				<button
					className="btn btn-outline-warning"
					onClick={() => onUpdateItem(id)}
				>
					Edit
				</button>
				<button
					className="btn btn-outline-danger"
					onClick={() => onDelItem(id)}
				>
					Del
				</button>
			</td>
			<td>{total}</td>
		</>
	);
}
export default Expense;
