import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import expenses from "./data";

function App() {
	const [data, setData] = useState(expenses);
	const [total, setTotal] = useState(handleTotal());

	// Handles
	function handleTotal() {
		const expensesArr = expenses
			.map((item) => item.amount)
			.reduce((acc, currentValue) => acc + currentValue, 0);
		return expensesArr;
	}

	function handleAddItem(item) {
		return setData((items) => [item, ...items]);
	}

	function handleUpdateTotal(amount) {
		return setTotal(total + Number(amount));
	}
	function handleUpdateItem(id) {
		setData(
			data.map((item) =>
				item.id === id
					? {
							...item,
							description: "Desc Edited",
							amount: 1000,
					  }
					: item
			)
		);
	}
	function handleDelItem(id) {
		setData((data) => data.filter((item) => item.id !== id));
	}

	return (
		<div className="App">
			<Header />
			<InputForm
				onAddItem={handleAddItem}
				onUpdateTotal={handleUpdateTotal}
				onUpdateItem={handleUpdateItem}
			/>
			<ExpensesList
				itemsProps={data}
				total={total}
				onUpdateItem={handleUpdateItem}
				onDelItem={handleDelItem}
			/>
			<Footer />
		</div>
	);
}
export default App;
