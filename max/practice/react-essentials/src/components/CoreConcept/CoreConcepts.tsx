import type { JSX } from "react";
import { CORE_CONCEPTS } from "../../models/data";
import CoreConcept from "../../components/CoreConcept/CoreConcept";
export default function CoreConcepts(): JSX.Element {
	return (
		<section className="core-concepts">
			<h2>Core Concepts</h2>
			<ul>
				{CORE_CONCEPTS.map((item) => (
					<CoreConcept key={item.title} concepts={item} />
				))}
			</ul>
		</section>
	);
}
