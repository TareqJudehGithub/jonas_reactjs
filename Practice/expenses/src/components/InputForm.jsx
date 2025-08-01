import { useState } from "react";
import { Form, FormControl, Row, Button } from "react-bootstrap";

function InputForm() {
	// States
	const timeElapsed = Date.now();
	const dateToday = new Date(timeElapsed);

	const [date, setDate] = useState(dateToday.toLocaleDateString());
	const [description, setDescription] = useState("");
	const [amount, setAmount] = useState(null);

	// Handler
	function handleSubmit(e) {
		e.preventDefault();
	}
	return (
		<div className="container input-form">
			<Form className="form" onSubmit={handleSubmit}>
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
							<Button
								variant="btn btn-secondary"
								onClick={() => console.log(date, description, amount)}
							>
								Add
							</Button>
						</div>
					</div>
				</Row>
			</Form>
		</div>
	);
}

export default InputForm;
