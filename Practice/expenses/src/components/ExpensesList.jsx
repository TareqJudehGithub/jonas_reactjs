import { useState } from "react";
import Expense from "./Expense";
function ExpensesList({ itemsProps, onDelItem }) {
	// States
	// Sort by column
	const [sortedBy, setSortedBy] = useState("date");

	// Sorting order - switch between asc and dsc
	const [sortAmountOrder, setSortAmountOrder] = useState("asc");

	let sortedItems;

	if (sortedBy === "date")
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date));
	else if (sortedBy === "description") {
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	} else if (sortedBy === "amount") {
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => Number(a.amount) - Number(b.amount));
	}

	// Handlers
	function handleSortAmount() {
		sortedItems = itemsProps.sort((a, b) => {
			if (sortAmountOrder === "asc") {
				console.log("Sorting ASC");

				return Number(a.amount) - Number(b.amount);
			} else {
				console.log("Sorting DSC");
				return Number(b.amount) - Number(a.amount);
			}
		});
		setSortAmountOrder(sortAmountOrder === "asc" ? "dsc" : "asc");
	}

	console.log(sortedItems.map((item) => item.amount));
	return (
		<div className="container">
			<table className="table table-dark">
				<thead className="table-header">
					<tr className="">
						<th className="">#</th>
						<th>Date</th>
						<th>Description</th>
						<th className="amount-header" onClick={handleSortAmount}>
							Amount - Jds
						</th>
						<th>Manage Transaction</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody style={{ verticalAlign: "middle" }}>
					{sortedItems.map((exp) => (
						<tr key={exp.id}>
							<Expense itemsList={exp} onDelItem={onDelItem} />
						</tr>
					))}
				</tbody>
			</table>
			<div className="form-select sort-by" aria-label="Default select example">
				<select value={sortedBy} onChange={(e) => setSortedBy(e.target.value)}>
					<option value="date">Sort by date</option>
					<option value="description">Sort by description</option>
					<option value="amount">Sort by amount</option>
				</select>
			</div>
		</div>
	);
}
export default ExpensesList;
