// React
import type { JSX } from "react";

// Styles
import styles from "./CoreConcept.module.css";

export default function CoreConcept(props: CoreConceptProps): JSX.Element {
	return (
		<div>
			<li className={styles.li}>
				<img className={styles.img} src={props.img} alt={props.title} />
				<h3 className={styles.h3}>{props.title}</h3>
				<p className={styles.p}>{props.description}</p>
			</li>
		</div>
	);
}
interface CoreConceptProps {
	title: string;
	description: string;
	img: string;
}
