import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Pizza data from data.js file - 03 Startup file
const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

function App() {
	return (
		<main className="container">
			<Header />
			<Menu />
			<Footer />
		</main>
	);
}

// Components
function Header() {
	return (
		<main className="header">
			<h1>Fast React Pizza Company</h1>;
		</main>
	);
}
function Menu() {
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			<Pizza
				name="Pizza Spinaci"
				ingredients="Tomato, mozarella, spinach, and ricotta cheese"
				photoName="/pizzas/spinaci.jpg"
				price={10} // For passing a non string data type.. i.e number.
			/>
			<Pizza
				name="Pizza Prosciutto"
				ingredients="Tomato, mozarella, ham, aragula, and burrata cheese"
				price={18}
				photoName="pizzas/prosciutto.jpg"
			/>
		</main>
	);
}
function Pizza(props) {
	return (
		<div>
			<img src={props.photoName} alt="Piza Spinaci " />
			<h3>{props.name}</h3>
			<p>{props.ingredients}</p>
			<p>{props.price}</p>
		</div>
	);
}

function Footer() {
	const hourTime = new Date().getHours();
	console.log(hourTime);
	return (
		<footer className="footer">
			<p>{new Date().toLocaleTimeString()}</p>
			<p>
				{/* check if shop is open or closed  */}
				{hourTime >= 12 && hourTime < 22
					? "We're currently open!"
					: "We are currently closed!"}
			</p>
		</footer>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
