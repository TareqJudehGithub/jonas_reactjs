import { useState } from "react";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";

function App() {
	// States
	const [bill, setBill] = useState("");
	const [myPercentage, setMyPercentage] = useState(0);
	const [friendsPercentage, setFriendsPercentage] = useState(0);
	//const [tip, setTip] = useState(0);
	const [total, setTotal] = useState(0);

	const tipTotal = (myPercentage + friendsPercentage) / 2 / 100;
	//setTip((tip) => (tip = Number(myPercentage) + Number(friendsPercentage)));

	// Handles
	function calculateTotal() {
		setTotal(Number(bill) + Number(bill) * Number(tipTotal));
		return total;
	}

	return (
		<div>
			<BillInput bill={bill} onBill={setBill} />
			<SelectPercentage
				myPercentage={myPercentage}
				onMyPercentage={setFriendsPercentage}
				label={"How did you like the service?"}
			></SelectPercentage>

			<SelectPercentage
				myPercentage={myPercentage}
				onMyPercentage={setMyPercentage}
				label={"How did your friends like the service?"}
			></SelectPercentage>
			<Output
				bill={bill}
				tip={tipTotal}
				total={total}
				onTotal={calculateTotal}
			/>
		</div>
	);
}
export default App;
