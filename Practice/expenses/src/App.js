import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import ExpensesList from "./components/ExpensesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import expenses from "./data";
import Stats from "./components/Stats";
import ExpenseDetails from "./components/ExpenseDetails";

function App() {
	const [data, setData] = useState(expenses);

	// Handles
	function handleAddItem(item) {
		return setData((items) => [item, ...items]);
	}
	function handleUpdateItem(id) {
		setData((data) =>
			data.map((item) =>
				item.id === id
					? {
							...item,
							date: item.date,
							description: item.description,
							amount: item.amount,
					  }
					: item
			)
		);
	}
	function handleDelItem(id) {
		setData((data) => data.filter((item) => item.id !== id));
	}
	function handlePayItem(id) {
		setData(
			data.map((item) =>
				item.id === id ? { ...item, isPaid: !item.isPaid } : item
			)
		);
		console.log("CLick handlePay");
	}

	return (
		<div className="App bg-black">
			<Header />
			<InputForm onAddItem={handleAddItem} />
			<Routes>
				<Route
					path="/"
					element={
						<ExpensesList
							itemsProps={data}
							onDelItem={handleDelItem}
							onPayItem={handlePayItem}
						/>
					}
				/>
				<Route
					path="ExpenseDetails:id"
					element={
						<ExpenseDetails
							itemsProps={data}
							onUpdateItem={handleUpdateItem}
						/>
					}
				/>
			</Routes>
			<Stats dataProps={data} />
			<Footer />
		</div>
	);
}
export default App;
