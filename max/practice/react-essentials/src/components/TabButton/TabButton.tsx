// React
import React, { type JSX } from "react";

// Styling
import styles from "./TabButton.module.css";

export default function TabButton(props: TabButtonProps): JSX.Element {
	return (
		<>
			<button
				className={props.isSelected ? styles.buttonActive : styles.button}
				onClick={props.onSelect}
			>
				{props.children}
			</button>
		</>
	);
}

interface TabButtonProps {
	children: React.ReactNode;
	onSelect: () => {} | void;
	isSelected: boolean;
}
