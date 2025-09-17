import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useReducer } from "react";
function App() {
	// States
	const initialState = {
		balance: 0,
		loan: 0,
		isActive: false,
		status: "notActive",
		activeLoan: false,
		depositAmount: 0,
		step: 5,
		depositInput: null,
	};

	// @ts-ignore
	function reducer(state, action) {
		switch (action.type) {
			case "openAccount":
				if (state.isActive) {
					alert("Account is already open!");
					return { ...state };
				}
				return {
					...state,
					status: "active",
					isActive: true,
					balance: 500,
				};

			case "ChangeDepositAmount":
				if (state.isActive) {
					return {
						...state,
						step: action.payload,
					};
				} else {
					return { ...state };
				}
			case "increaseDeposit":
				if (state.isActive) {
					return {
						...state,
						depositAmount: state.depositAmount + action.payload,
					};
				} else {
					return { ...state };
				}
			case "decreaseDeposit":
				if (state.isActive) {
					return {
						...state,
						depositAmount:
							state.depositAmount > 0
								? state.depositAmount - action.payload
								: state.depositAmount,
					};
				} else {
					return { ...state };
				}
			case "deposit":
				if (state.isActive) {
					return {
						...state,
						balance: state.balance + action.payload,
					};
				} else {
					return { ...state };
				}
			case "withdraw":
				return {
					...state,
					balance:
						state.status === "active" && state.balance > 0
							? state.balance - action.payload
							: state.balance,
				};
			case "requestLoan":
				if (state.activeLoan === true && state.loan > 0) {
					alert("Already on a loan program");
					return {
						...state,
					};
				}
				return {
					...state,
					loan: state.loan + action.payload,

					balance: state.balance + action.payload,

					activeLoan: (state.activeLoan = true),
				};

			case "payLoan":
				if (state.balance >= 5000 && state.status === "active")
					return {
						...state,
						loan: state.loan - action.payload,
						balance: state.balance - action.payload,
						activeLoan: (state.activeLoan = false),
					};
				else {
					alert("No enough balance to pay the loan.");
					return {
						...state,
					};
				}
			case "closeAccount":
				if (state.balance === 0) {
					return {
						...state,
						status: "notActive",
						isActive:
							state.isActive === true
								? (state.isActive = false)
								: state.isActive,
					};
				} else {
					alert("Cannot close an account with balance in it.");
					return {
						...state,
					};
				}

			default:
				return "Undefined type";
		}
	}
	// @ts-ignore
	const [
		{ balance, loan, isActive, depositAmount, step, depositInput },
		dispatch,
	] = useReducer(reducer, initialState);

	// @ts-ignore
	function handleSubmit(e) {
		e.preventDefault();
		//dispatch(({type: "setDepositAmount", payload: e.target.value}))
	}

	return (
		<div className="App">
			<Header />
			<Main>
				<p>Balance: {balance}</p>
				<p>Loan: {loan}</p>

				<p>
					<button
						onClick={() => dispatch({ type: "openAccount" })}
						disabled={false}
					>
						Open account
					</button>
				</p>

				<span>
					<input
						type="range"
						min={5}
						max={1000}
						value={step}
						onChange={(e) =>
							dispatch({
								type: "ChangeDepositAmount",
								payload: Number(e.target.value),
							})
						}
					/>
				</span>
				<span>{step}</span>
				<span
					className="btn-amount"
					onClick={() => dispatch({ type: "decreaseDeposit", payload: step })}
				>
					&lt;
				</span>
				<span>${depositAmount}</span>

				<span
					className="btn-amount"
					onClick={() => dispatch({ type: "increaseDeposit", payload: step })}
				>
					&gt;
				</span>
				<button
					onClick={() =>
						dispatch({ type: "deposit", payload: Number(depositAmount) })
					}
					disabled={!isActive}
				>
					Deposit
				</button>

				<form onSubmit={handleSubmit}>
					<input
						value={depositInput}
						type="number"
						onChange={(e) =>
							dispatch({ type: "deposit", payload: Number(e.target.value) })
						}
						disabled={!isActive}
					/>
				</form>

				<p>
					<button
						onClick={() => dispatch({ type: "withdraw", payload: 50 })}
						disabled={!isActive}
					>
						Withdraw 50
					</button>
				</p>
				<p>
					<button
						onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
						disabled={!isActive}
					>
						Request a loan of 5000
					</button>
				</p>
				<p>
					<button
						onClick={() => dispatch({ type: "payLoan", payload: 5000 })}
						disabled={!isActive}
					>
						Pay loan
					</button>
				</p>
				<p>
					<button
						onClick={() => dispatch({ type: "closeAccount" })}
						disabled={!isActive}
					>
						Close account
					</button>
				</p>
			</Main>
			<Footer />
		</div>
	);
}

export default App;
