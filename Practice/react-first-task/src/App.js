import "./App.css";

export default function App() {
	return (
		<div className="container">
			<Header />

			<Main />

			<Footer />
		</div>
	);
}

// Components
function Header() {
	return (
		<header>
			<h1>Welcome to React!</h1>
		</header>
	);
}
function Main() {
	return (
		<main>
			<h4>
				Fun fact: A developer once fixed a bug by taking a nap. True story!”
			</h4>
		</main>
	);
}
function Footer() {
	return <footer>&copy; 2025 all rights reserved.</footer>;
}
