import { useEffect, useRef } from "react";

function BillInput({ bill, onSetBill }) {
	const billFocus = useRef(null);
	useEffect(() => {
		return billFocus.current.focus();
	}, []);
	// handler
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label htmlFor="bill">How much was the bill? </label>
				<input
					type="number"
					name="bill"
					placeholder="Enter bill amount"
					value={bill}
					onChange={(e) => onSetBill(Number(e.target.value))}
					required
					ref={billFocus}
				/>
			</div>
		</form>
	);
}
export default BillInput;
