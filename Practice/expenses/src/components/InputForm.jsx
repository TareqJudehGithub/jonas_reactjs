import { useState, useRef, useEffect } from "react";
import { FormControl, Row, Button } from "react-bootstrap";
import expenses from "../data";

function InputForm({ onAddItem }) {
	// Formatting date to yyyy/mm/dd
	const timeElapsed = Date.now();
	const dateToday = new Date(timeElapsed);

	// Autofocus Transaction input
	const focusInput = useRef(null);
	useEffect(() => {
		return focusInput.current.focus();
	}, []);
	// States
	const [date, setDate] = useState(dateToday.toLocaleDateString());
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState("");

	// Handler
	function handleSubmit(e) {
		e.preventDefault();

		const idGenerator = () => Math.trunc(Math.random() * 1000000 + 1);
		let uniqueKey;
		let duplicateId = expenses.map((map) => map.id).includes(uniqueKey);

		do {
			uniqueKey = idGenerator();
			if (duplicateId) {
				alert("Item Id Duplicate creating new Id");
			}
		} while (duplicateId);

		const newItem = {
			id: uniqueKey,
			date: date,
			description: description,
			amount: amount,
		};
		console.log(`Adding new item: ${newItem.description}`);
		onAddItem(newItem);

		// reset input fields
		setDate(dateToday.toLocaleDateString());
		setDescription("");
		setAmount("");
	}

	return (
		<div className="container input-form">
			<form className="form" onSubmit={handleSubmit}>
				<Row className="row input-row">
					<div className="col-sm-2">
						<div className="input-label">
							<FormControl
								className="input-field"
								type="date"
								value={date}
								onChange={(e) => setDate(e.target.value)}
							/>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="input-label">
							<FormControl
								className="input-field"
								type="text"
								placeholder="Transaction"
								value={description}
								onChange={(e) => setDescription(e.target.value)}
								ref={focusInput}
							/>
						</div>
					</div>
					<div className="col-sm-2 ">
						<div className="input-label">
							<FormControl
								className="input-field"
								type="number"
								placeholder="Amount"
								value={amount}
								onChange={(e) => setAmount(e.target.value)}
							/>
						</div>
					</div>

					<div className="col-sm-2 ">
						<div className="input-label">
							<Button variant="btn btn-outline-secondary" type="submit">
								Add
							</Button>
						</div>
					</div>
				</Row>
			</form>
		</div>
	);
}

export default InputForm;
