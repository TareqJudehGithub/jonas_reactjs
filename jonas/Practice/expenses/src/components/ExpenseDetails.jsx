import { useEffect, useRef } from "react";
import { FormControl, Row, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
function ExpenseDetails({ itemsProps, onUpdateItem }) {
	const [expID, date, description, amount] = itemsProps;
	const { id } = useParams();
	const focusInput = useRef(null);
	useEffect(() => {
		return focusInput.current.focus();
	}, []);
	// Handles

	function handleSubmit(e) {
		e.preventDefault();

		onUpdateItem(id);
	}
	return (
		<div className="container input-form">
			<form className="form" onSubmit={() => handleSubmit}>
				<Row className="row input-row">
					<div className="col-sm-2">
						<div className="input-label">
							<FormControl
								className="input-field"
								type="text"
								placeholder=""
								value={date}
								onChange={(e) => e.target.value}
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
								onChange={(e) => e.target.value}
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
								onChange={(e) => e.target.value}
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
export default ExpenseDetails;
