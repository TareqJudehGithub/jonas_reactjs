// Models
import { CORE_CONCEPTS, EXAMPLES } from "./models/data";
// Custom Components
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";

function App() {
	// States
	const [selectedTopic, setSelectedTopic] = useState("components");

	// Handles
	function handleSelect(selectedButton: string): void {
		setSelectedTopic(selectedButton);
	}
	return (
		<div>
			<Header />
			<main>
				<section className="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						<CoreConcept
							title={CORE_CONCEPTS[0].title}
							description={CORE_CONCEPTS[0].description}
							img={CORE_CONCEPTS[0].image}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[1].title}
							description={CORE_CONCEPTS[1].description}
							img={CORE_CONCEPTS[1].image}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[2].title}
							description={CORE_CONCEPTS[2].description}
							img={CORE_CONCEPTS[2].image}
						/>
						<CoreConcept
							title={CORE_CONCEPTS[3].title}
							description={CORE_CONCEPTS[3].description}
							img={CORE_CONCEPTS[3].image}
						/>
					</ul>
				</section>
				<section className="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton onSelect={() => handleSelect("components")}>
							Components
						</TabButton>
						<TabButton onSelect={() => handleSelect("jsx")}>JSX</TabButton>
						<TabButton onSelect={() => handleSelect("props")}>Props</TabButton>
						<TabButton onSelect={() => handleSelect("state")}>State</TabButton>
					</menu>
					<div className="tab-content">
						<h3>{EXAMPLES[selectedTopic].title}</h3>
						<p>{EXAMPLES[selectedTopic].description}</p>
						<pre>
							<code>{EXAMPLES[selectedTopic].code}</code>
						</pre>
					</div>
				</section>
			</main>
		</div>
	);
}

export default App;
