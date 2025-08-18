import { useState } from "react";
import initialFriends from "./friends-data";

import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import Button from "./components/Button";

function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);
	const [showBillForm, setShowBillForm] = useState(null);
	const [selectedFriend, setSelectedFriend] = useState(null);

	// Handlers
	// AddFriend menu
	function handleShowForm() {
		setShowAddFriend((show) => !show);
		setShowBillForm(null);
	}
	function handleAddFriend(friend) {
		setFriends((friends) => [friend, ...friends]);
		setShowAddFriend((show) => !show);
	}

	// Bill menu
	// Selecting/deselecting a friend from FriendsList, passing its data to BillForm
	function handleSelection(friend) {
		console.log("Selecting friend event");

		// Hide/Display Bill form
		setShowBillForm((cur) => (cur?.id === friend.id ? null : friend));
		setSelectedFriend(friend);
		setShowAddFriend(false);
	}

	function handleSplitBill(billSplitValue) {
		console.log(billSplitValue);
		setFriends(
			friends.map((friend) =>
				selectedFriend.id === friend.id
					? { ...friend, balance: friend.balance + billSplitValue }
					: friend
			)
		);

		setSelectedFriend(null);
		setShowBillForm(null);
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList
					friendsList={friends}
					onSelection={handleSelection}
					selectedFriend={selectedFriend}
					toggleBillForm={showBillForm}
				/>

				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
				<Button onClick={handleShowForm}>
					{showAddFriend ? <span>Close</span> : <span>Add friend</span>}
				</Button>
			</div>
			{selectedFriend && showBillForm && (
				<FormSplitBill
					selectedFriend={selectedFriend}
					onSplitBill={handleSplitBill}
					// Adding this key will RESET the state after selecting a new friend
					key={selectedFriend.id}
				/>
			)}
		</div>
	);
}

export default App;
