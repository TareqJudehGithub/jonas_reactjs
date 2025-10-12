// React
import type { JSX } from "react";
import type { Core } from "../../models/data.model";

// Styles
import styles from "./CoreConcept.module.css";

export default function CoreConcept(props: CoreConceptProps): JSX.Element {
	return (
		<div>
			<li className={styles.li}>
				<img
					className={styles.img}
					src={props.concepts?.image}
					alt={props.concepts?.title}
				/>
				<h3 className={styles.h3}>{props.concepts?.title}</h3>
				<p className={styles.p}>{props.concepts?.description}</p>
			</li>
		</div>
	);
}

interface CoreConceptProps {
	concepts: Core | undefined;
}
