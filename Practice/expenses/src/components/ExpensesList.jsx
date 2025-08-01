function ExpensesList() {
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
					</tr>
				</thead>

				<tbody className="tbody">
					<tr>
						<td>1</td>
						<td>Jun 31 2025</td>
						<td>Leen Salary</td>
						<td>10</td>
						<td>
							<button className="btn btn-outline-warning">Edit</button>
							<button className="btn btn-outline-danger">Edit</button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}
export default ExpensesList;
