import { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
	// States
	const [bill, setBill] = useState("");
	const [paidByUser, setPaidByUser] = useState("");
	const [whoIsPaying, setWhoIsPaying] = useState("user");

	// Derived states
	const paidByFriend = bill ? Number(bill) - Number(paidByUser) : null;

	// Handlers
	function handleSubmit(e) {
		e.preventDefault();

		onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
	}
	return (
		<form className="form-split-bill" onSubmit={handleSubmit}>
			<h2>
				Split a bill with{" "}
				<strong>
					<em>{selectedFriend.name}</em>
				</strong>
			</h2>

			<label>💰Bill value</label>
			<input
				type="number"
				value={bill}
				onChange={(e) => setBill(e.target.value)}
				required
			/>

			<label>💰Your expense</label>
			<input
				type="number"
				value={paidByUser}
				onChange={(e) =>
					setPaidByUser(
						Number(e.target.value) > Number(bill) ? paidByUser : e.target.value
					)
				}
			/>

			<label htmlFor="paidByFriend">
				💰<strong>{selectedFriend.name}</strong>'s expense
			</label>

			{paidByFriend ? (
				<input
					name="paidByFriend"
					id="paidByFriend"
					type="text"
					disabled
					value={paidByFriend}
				/>
			) : (
				<input type="text" disabled />
			)}

			<label>🤔 Who is paying bill?</label>

			<select
				value={whoIsPaying}
				onChange={(e) => setWhoIsPaying(e.target.value)}
			>
				<option value="user">My self</option>
				<option value="friend">{selectedFriend.name}</option>
			</select>

			<Button onClick={() => console.log("Submitting form - Split Bill")}>
				Split bill
			</Button>
		</form>
	);
}
export default FormSplitBill;
