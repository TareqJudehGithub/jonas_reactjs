import { useState } from "react";
import ExpensesList from "./components/ExpensesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";
import expenses from "./data";
import Stats from "./components/Stats";

function App() {
	const [data, setData] = useState(expenses);

	// Handles
	function handleAddItem(item) {
		return setData((items) => [item, ...items]);
	}

	function handleDelItem(id) {
		setData((data) => data.filter((item) => item.id !== id));
	}

	return (
		<div className="App bg-black">
			<Header />
			<InputForm onAddItem={handleAddItem} />
			<ExpensesList itemsProps={data} onDelItem={handleDelItem} />

			<Stats dataProps={data} />

			<Footer />
		</div>
	);
}
export default App;
