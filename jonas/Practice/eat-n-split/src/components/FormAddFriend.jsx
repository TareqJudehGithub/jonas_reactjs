import { useRef, useEffect, useState } from "react";
import Button from "./Button";

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
export default FormAddFriend;
