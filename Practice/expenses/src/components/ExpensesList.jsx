import Expense from "./Expense";

function ExpensesList({ itemsProps, total, onDelItem, onUpdateItem }) {
	return (
		<div className="container">
			<table className="table">
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
							<Expense
								itemsList={exp}
								total={total}
								onDelItem={onDelItem}
								onUpdateItem={onUpdateItem}
							/>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
export default ExpensesList;
