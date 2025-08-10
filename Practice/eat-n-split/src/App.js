import { useEffect, useRef, useState } from "react";
import initialFriends from "./friends-data";

function App() {
	const [showAddFriend, setShowAddFriend] = useState(false);
	const [friends, setFriends] = useState(initialFriends);

	// Handlers
	function handleShowForm() {
		setShowAddFriend((show) => !show);
	}
	function handleAddFriend(friend) {
		setFriends((friends) => [friend, ...friends]);
		setShowAddFriend((show) => !show);
	}
	function handleClickMe() {
		console.log("Click event fired!");
	}
	return (
		<div className="app">
			<div className="sidebar">
				<FriendsList friendsList={friends} onClickMe={handleClickMe} />
				{showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
				<Button onClick={handleShowForm}>
					{showAddFriend ? <span>Close</span> : <span>Add friend</span>}
				</Button>
			</div>
			<FormSplitBill />
		</div>
	);
}

function FriendsList({ friendsList, onClickMe }) {
	return (
		<>
			<ul className="friends-list">
				{friendsList.map((friend) => (
					<Friend friend={friend} key={friend.id} onClickMe={onClickMe} />
				))}
			</ul>
		</>
	);
}
function Friend({ friend, onClickMe }) {
	return (
		<li>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance > 0 && (
				<p style={{ color: "green" }}>
					{friend.name} owes you ${friend.balance}
				</p>
			)}
			{friend.balance < 0 && (
				<p style={{ color: "red" }}>
					Your owe {friend.name} ${friend.balance}
				</p>
			)}
			{friend.balance === 0 && <p>You and {friend.name} are even</p>}
			<Button onClick={onClickMe}>Select</Button>
		</li>
	);
}
function FormAddFriend({ onAddFriend }) {
	const inputFocus = useRef(null);
	useEffect(() => {
		return inputFocus.current.focus();
	}, []);

	// States
	const [friendName, setFriendName] = useState("");
	const [imgUrl, setImgUrl] = useState("https://i.pravatar.cc/48");

	// Handles
	function handleSubmit(e) {
		e.preventDefault();

		// Generate new ID using crypto
		const uniqueId = crypto.randomUUID();
		console.log(uniqueId);
		const newFriend = {
			id: uniqueId,
			name: friendName,
			image: `${imgUrl}?u=${uniqueId}`,
			balance: 0,
		};
		console.log(newFriend);
		onAddFriend(newFriend);

		setFriendName("");
		setImgUrl("https://i.pravatar.cc/48");
	}

	return (
		<form className="form-add-friend" onSubmit={handleSubmit}>
			<label>Friend Name</label>
			<input
				type="text"
				value={friendName}
				required
				placeholder="Friend's name"
				onChange={(e) => setFriendName(e.target.value)}
				ref={inputFocus}
			/>
			<label>📷 Image URL</label>
			<input
				type="text"
				value={imgUrl}
				required
				placeholder="Friend's picture"
				onChange={(e) => setImgUrl(e.target.value)}
			/>
			<Button onClick={() => console.log("Submitting form - new friend")}>
				Add
			</Button>
		</form>
	);
}
function FormSplitBill() {
	return (
		<form className="form-split-bill">
			<h2>Split a bill with X</h2>

			<label>💰Bill value</label>
			<input type="number" />

			<label>💰Your expense</label>
			<input type="text" />

			<label>💰Friend's expense</label>
			<input type="text" disabled />

			<label>🤔 Who is paying bill?</label>

			<select defaultValue="me">
				<option value="me">My self</option>
				<option value="friend">My friend</option>
			</select>

			<Button onClick={() => console.log("Submitting form - Split Bill")}>
				Split bill
			</Button>
		</form>
	);
}

export default App;

// Reusable components

function Button({ children, onClick }) {
	return (
		<button className="button" onClick={onClick}>
			{children}
		</button>
	);
}
