import { Link } from "react-router-dom";

function Expense({ itemsList, onDelItem, onPayItem }) {
	const { id, date, description, amount, isPaid } = itemsList;

	return (
		<>
			<td>{date}</td>
			<td>
				<span
					style={
						isPaid ? { textDecoration: "line-through", color: "grey" } : {}
					}
				>
					{description}
				</span>
			</td>
			<td>
				<span
					style={
						isPaid ? { textDecoration: "line-through", color: "grey" } : {}
					}
				>
					JOD {amount}
				</span>
			</td>

			<td>
				<input onChange={() => onPayItem(id)} type="checkbox" value={isPaid} />
			</td>
			<td>
				<button
					className="btn btn-outline-secondary m-1 btn-edit"

					/* Edit page route should be here */
				>
					<Link to="/expenseDetails" className="link-edit">
						Edit
					</Link>
				</button>
				<button
					className="btn btn-outline-danger m-1"
					onClick={() => onDelItem(id)}
				>
					Del
				</button>
			</td>
		</>
	);
}
export default Expense;
