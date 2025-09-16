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
	};

	// @ts-ignore
	function reducer(state, action) {
		switch (action.type) {
			case "openAccount":
				return {
					...state,
					status: "active",
					isActive: (state.isActive = true),
				};
			case "deposit":
				return {
					...state,
					balance:
						state.status === "active"
							? state.balance + action.payload
							: state.balance,
				};
			case "withdraw":
				return {
					...state,
					balance:
						state.status === "active" && state.balance > 0
							? state.balance - action.payload
							: state.balance,
				};
			case "requestLoan":
				return {
					...state,
					loan:
						state.status === "active"
							? state.loan + action.payload
							: state.loan,
					balance:
						state.status === "active"
							? state.balance + action.payload
							: state.balance,
					activeLoan: (state.activeLoan = true),
				};
			case "payLoan":
				if (state.activeLoan === true) {
					alert("You already applied for a loan.");
					return {
						...state,
					};
				} else if (state.balance >= 5000 && state.status === "active")
					return {
						...state,
						loan: state.loan - action.payload,
						balance: state.balance - action.payload,
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
						isActive: (state.isActive = false),
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
	const [{ balance, loan, isActive }, dispatch] = useReducer(
		reducer,
		initialState
	);

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
				<p>
					<button
						onClick={() => dispatch({ type: "deposit", payload: 150 })}
						disabled={!isActive}
					>
						Deposit 150
					</button>
				</p>
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
