import Friend from "./Friend";

function FriendsList({
	friendsList,
	onSelection,
	selectedFriend,
	toggleBillForm,
}) {
	return (
		<>
			<ul className="friends-list">
				{friendsList.map((friend) => (
					<Friend
						friend={friend}
						key={friend.id}
						onSelection={onSelection}
						selectedFriend={selectedFriend}
						toggleBillForm={toggleBillForm}
					/>
				))}
			</ul>
		</>
	);
}
export default FriendsList;
