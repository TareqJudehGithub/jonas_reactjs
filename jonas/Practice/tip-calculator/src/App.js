import { useState } from "react";
import BillInput from "./components/BillInput";
import SelectPercentage from "./components/SelectPercentage";
import Output from "./components/Output";

function App() {
	// States
	const [bill, setBill] = useState("");
	const [myPercentage, setMyPercentage] = useState(0);
	const [friendsPercentage, setFriendsPercentage] = useState(0);
	const [total, setTotal] = useState(0);

	let tipTotal = (myPercentage + friendsPercentage) / 2 / 100;

	// Handles
	function calculateTotal() {
		setTotal(Number(bill) + Number(bill) * tipTotal);
		return total;
	}
	function resetInputs() {
		setBill("");
		setMyPercentage(0);
		setFriendsPercentage(0);
		setTotal(0);
	}

	return (
		<div>
			<BillInput bill={bill} onSetBill={setBill} />
			<SelectPercentage
				percentage={myPercentage}
				onPercentage={setMyPercentage}
				children={"How did you like the service?"}
			></SelectPercentage>

			<SelectPercentage
				percentage={friendsPercentage}
				onPercentage={setFriendsPercentage}
				children={"How did your friends like the service?"}
			></SelectPercentage>
			<Output
				bill={bill}
				tip={tipTotal}
				total={total}
				onTotal={calculateTotal}
				onReset={resetInputs}
			/>
		</div>
	);
}
export default App;
