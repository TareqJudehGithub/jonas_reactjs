import { useState } from "react";
import Expense from "./Expense";
function ExpensesList({ itemsProps, onDelItem, onPayItem }) {
	// States
	// Sort by column
	let [sortedBy, setSortedBy] = useState("input");
	let [sortDateBy, setSortDateBy] = useState("asc");
	let [sortDescBy, setSortDescBy] = useState("asc");
	let [sortAmountBy, setSortAmountBy] = useState("asc");

	let sortedItems;
	// Default sorting order
	if (sortedBy === "input") sortedItems = itemsProps;

	// Drop down sort menu
	if (sortedBy === "date")
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => b.date.localeCompare(a.date));
	if (sortedBy === "date" && sortDateBy === "dsc")
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => a.date.localeCompare(b.date));

	if (sortedBy === "description") {
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => a.description.localeCompare(b.description));
	}
	if (sortedBy === "description" && sortDescBy === "dsc") {
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => b.description.localeCompare(a.description));
	}

	if (sortedBy === "amount") {
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => Number(b.amount) - Number(a.amount));
	}
	if (sortedBy === "amount" && sortAmountBy === "dsc") {
		sortedItems = itemsProps
			.slice()
			.sort((a, b) => Number(a.amount) - Number(b.amount));
	}

	// Handlers
	function handleSortByDate() {
		setSortedBy((sortedBy = "date"));
		setSortDateBy(sortDateBy === "asc" ? "dsc" : "asc");
		console.log(sortedBy, sortDateBy);
	}
	function handleSortByDesc() {
		setSortedBy((sortedBy = "description"));
		setSortDescBy(sortDescBy === "asc" ? "dsc" : "asc");
		console.log(sortedBy, sortDescBy);
	}
	function handleSortByAmount() {
		setSortedBy((sortedBy = "amount"));
		setSortAmountBy(sortAmountBy === "asc" ? "dsc" : "asc");
		console.log(sortedBy, sortAmountBy);
	}

	return (
		<div className="container">
			<table className="table table-dark">
				<thead className="table-header">
					<tr className="">
						<th className="date-header" onClick={handleSortByDate}>
							Date
						</th>
						<th className="desc-header" onClick={handleSortByDesc}>
							Description
						</th>
						<th className="amount-header" onClick={handleSortByAmount}>
							Amount
						</th>
						<th>Status</th>
						<th>Manage Transaction</th>
					</tr>
				</thead>
				<tbody style={{ verticalAlign: "middle" }}>
					{sortedItems.map((exp) => (
						<tr key={exp.id}>
							<Expense
								itemsList={exp}
								onDelItem={onDelItem}
								onPayItem={onPayItem}
							/>
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
