import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/CitiesList";

export default function App() {
	const [cities, setCities] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function () {
		const BASE_URL = "http://localhost:5000";

		async function fetchCities() {
			try {
				setIsLoading(true);
				const response = await fetch(`${BASE_URL}/cities`);
				const data = await response.json();
				setCities(data);
				console.log(data);
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		}
		fetchCities();
	}, []);
	return (
		<>
			<header>Header goes here</header>
			<BrowserRouter>
				<Routes>
					{/* index for the default route, we could also use path="/*/}
					<Route index element={<Homepage />} />
					<Route path="/product" element={<Product />} />
					<Route path="/pricing" element={<Pricing />} />
					<Route path="/login" element={<Login />} />

					<Route path="app" element={<AppLayout />}>
						<Route
							index
							element={<CitiesList cities={cities} isLoading={isLoading} />}
						/>
						<Route
							path="cities"
							element={<CitiesList cities={cities} isLoading={isLoading} />}
						/>
						<Route path="countries" element={<p>List of countries</p>} />
						<Route path="form" element={<p>Form</p>} />
					</Route>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
