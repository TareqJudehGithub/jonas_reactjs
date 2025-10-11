// @ts-ignore
import styles from "./Button.module.css";

// @ts-ignore
export default function Button({ children, onClick, type }) {
	return (
		<button className={`${styles.btn} ${styles[type]}`} onClick={onClick}>
			{children}
		</button>
	);
}
