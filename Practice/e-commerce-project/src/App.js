import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Header from "./layout/Header";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/header" element={<Header />} />
				<Route path="/" element={<Home />} />
			</Routes>
		</div>
	);
}

export default App;
