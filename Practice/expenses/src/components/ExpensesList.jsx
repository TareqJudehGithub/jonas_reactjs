import Expense from "./Expense";
import Stats from "./Stats";
function ExpensesList({ itemsProps, onDelItem }) {
	return (
		<div className="container">
			<table className="table table-dark">
				<thead className="table-header">
					<tr className="">
						<th className="">#</th>
						<th>Date</th>
						<th>Description</th>
						<th>Amount - Jds</th>
						<th>Manage Transaction</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody style={{ verticalAlign: "middle" }}>
					{itemsProps.map((exp) => (
						<tr key={exp.id}>
							<Expense itemsList={exp} onDelItem={onDelItem} />
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ExpensesList;
