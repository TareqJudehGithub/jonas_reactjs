import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";

import AppLayout from "./pages/AppLayout";
import CitiesList from "./components/CitiesList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";

export default function App() {
	const [cities, setCities] = useState([]);
	const [countries, setCountries] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(function () {
		const BASE_URL = "http://localhost:5000";

		async function fetchCities() {
			try {
				setIsLoading(true);
				const response = await fetch(`${BASE_URL}/cities`);
				const data = await response.json();
				setCities(data);
				// setCountries(data);
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
						<Route index element={<Navigate replace to="cities" />} />
						<Route
							path="cities"
							element={<CitiesList cities={cities} isLoading={isLoading} />}
						/>

						{/* Route with url params*/}
						<Route path="cities/:id" element={<City />} />

						<Route
							path="countries"
							element={<CountryList cities={cities} isLoading={isLoading} />}
						/>
						<Route path="form" element={<Form />} />
					</Route>

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}
