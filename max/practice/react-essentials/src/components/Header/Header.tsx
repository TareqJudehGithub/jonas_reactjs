// React
import type { JSX } from "react";
// Images
import reactLogo from "../../assets/react-core-concepts.png";
// Styling
import styles from "./Header.module.css";

export default function Header(): JSX.Element {
	const reactDescriptions: Array<string> = ["Fundamental", "Crucial", "Core"];
	function genRandomInt(max: number): number {
		return Math.trunc(Math.random() * (max + 1));
	}
	let randomNum: number = genRandomInt(reactDescriptions.length - 1);
	const description: string = reactDescriptions[randomNum];

	return (
		<header className={styles.header}>
			<img src={reactLogo} alt="Stylized atom" />
			<h1>React Essentials</h1>
			<p>
				{description} React concepts you will need for almost any app you are
				going to build!
			</p>
		</header>
	);
}
