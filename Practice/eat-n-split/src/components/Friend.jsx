import Button from "./Button";

function Friend({ friend, onSelection, selectedFriend, toggleBillForm }) {
	const isSelected = selectedFriend?.id === friend.id;

	return (
		<li className={isSelected ? "selected" : ""}>
			<img src={friend.image} alt={friend.name} />
			<h3>{friend.name}</h3>
			{friend.balance > 0 && (
				<p className="green">
					{friend.name} owes you ${friend.balance}
				</p>
			)}
			{friend.balance < 0 && (
				<p className="red">
					Your owe {friend.name} ${friend.balance}
				</p>
			)}
			{friend.balance === 0 && <p>You and {friend.name} are even</p>}

			<Button onClick={() => onSelection(friend)}>
				{isSelected && toggleBillForm ? (
					<span>Close</span>
				) : (
					<span>Select</span>
				)}
			</Button>
		</li>
	);
}
export default Friend;
