import Expense from "./components/Expense";
import ExpensesList from "./components/ExpensesList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
	return (
		<div className="App">
			<Header />
			<InputForm />
			<ExpensesList />
			<Expense />
			<Footer />
		</div>
	);
}
export default App;
