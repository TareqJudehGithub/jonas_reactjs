import { useEffect, useRef, useState } from "react";

function App() {
	// States
	const [amount, setAmount] = useState(1);
	const [fromCurrency, setFromCurrency] = useState("EUR");
	const [toCurrency, setToCurrency] = useState("USD");
	const [converted, setConverted] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`;

	const autoFocus = useRef(null);

	useEffect(
		function () {
			async function convert() {
				setIsLoading((loading) => !loading);
				const response = await fetch(url);
				const data = await response.json();

				setConverted(data.rates[toCurrency]);
				setIsLoading((loading) => !loading);
			}
			// Check if from and to has the same currency
			if (fromCurrency === toCurrency) {
				return setConverted(amount);
			}
			convert();
		},
		[amount, fromCurrency, toCurrency, url, converted]
	);
	useEffect(() => {
		return autoFocus.current.focus();
	});

	return (
		<div>
			<input
				type="text"
				value={amount}
				onChange={(e) => setAmount(Number(e.target.value))}
				disabled={isLoading}
				ref={autoFocus}
			/>
			<select
				value={fromCurrency}
				onChange={(e) => setFromCurrency(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<select
				value={toCurrency}
				onChange={(e) => setToCurrency(e.target.value)}
				disabled={isLoading}
			>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="CAD">CAD</option>
				<option value="INR">INR</option>
			</select>
			<p>OUTPUT: {converted}</p>
		</div>
	);
}

export default App;
