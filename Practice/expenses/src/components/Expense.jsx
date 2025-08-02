function Expense({ itemsList, onDelItem }) {
	const { id, date, description, amount } = itemsList;
	return (
		<>
			<td>{id}</td>
			<td>{date}</td>
			<td>{description}</td>
			<td>JOD {amount}</td>
			<td>
				<button className="btn btn-outline-secondary m-1">Edit</button>
				<button
					className="btn btn-outline-danger m-1"
					onClick={() => onDelItem(id)}
				>
					Del
				</button>
			</td>
			<td></td>
		</>
	);
}
export default Expense;
