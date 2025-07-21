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
	const pizzas = pizzaData;
	//const pizzas = [];
	const numpizzas = pizzas.length;

	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{numpizzas > 0 ? (
				<>
					<p>
						Authentic Italian cuisine. Six creative dishes to choose from. All
						from stone oven, all organic, all delicious.
					</p>

					<ul className="pizzas">
						{pizzaData.map((pizza) => (
							<Pizza
								/* Passing the pizza object*/
								pizzaObj={pizza}
								key={pizza.name}

								/* Passing each property name in pizza object*/
								// name={pizza.name}
								// ingredients={pizza.ingredients}
								// price={pizza.price}
								// photoName={pizza.photoName}
								// soldOut={pizza.soldOut}
							/>
						))}
					</ul>
				</>
			) : (
				<p>We still working on our menu</p>
			)}
		</main>
	);
}

function Pizza({ pizzaObj }) {
	// param name must match the props name in parent component.
	const { name, ingredients, price, photoName, soldOut } = pizzaObj;

	return (
		<li className={`${soldOut ? "pizza sold-out" : "pizza"}`}>
			<img src={photoName} alt="Pizza" />
			<h3>{name}</h3>
			<p>{ingredients}</p>
			<span>
				{soldOut ? (
					<>
						<span>{price}</span>
						<span>Sold out</span>
					</>
				) : (
					price
				)}
			</span>
		</li>
	);
}

function Footer() {
	const hourTime = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hourTime >= openHour && hourTime < closeHour;

	return (
		<footer className="footer">
			{/* check if shop is open or closed using short circuiting */}
			{isOpen ? (
				<Order openHour={openHour} closeHour={closeHour} />
			) : (
				<p>
					{new Date().getHours().toLocaleString()}:00 We are happy to welcome
					you between {openHour}:00 and {closeHour}:00
				</p>
			)}
		</footer>
	);
}
function Order({ openHour, closeHour }) {
	return (
		<div className="order">
			<p>
				We're currently open! From {openHour}:00 right until {closeHour}:00
			</p>
			<button className="btn">Order</button>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// For Footer() function
// Using if statement instead of ternary for including multiple returns.
// if (!isOpen)
// 	return (
// 		<p>
// 			Using if statement. We are happy to welcome you between {openHour}:00
// 			and {closeHour}:00
// 		</p>
// 	);
