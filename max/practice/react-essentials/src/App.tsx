// Models
import { CORE_CONCEPTS, EXAMPLES } from "./models/data";
// Custom Components
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";
import { useState } from "react";

function App() {
	// States
	const [selectedTopic, setSelectedTopic] = useState();

	// Handles
	function handleSelect(selectedButton: string | any): void {
		setSelectedTopic(selectedButton);
	}
	return (
		<div>
			<Header />
			<main>
				<section className="core-concepts">
					<h2>Core Concepts</h2>
					<ul>
						{CORE_CONCEPTS.map((item) => (
							<CoreConcept key={item.title} concepts={item} />
						))}
					</ul>
				</section>

				<section className="examples">
					<h2>Examples</h2>
					<menu>
						<TabButton
							onSelect={() => handleSelect("components")}
							isSelected={selectedTopic === "components"}
						>
							Components
						</TabButton>
						<TabButton
							onSelect={() => handleSelect("jsx")}
							isSelected={selectedTopic === "jsx"}
						>
							JSX
						</TabButton>
						<TabButton
							onSelect={() => handleSelect("props")}
							isSelected={selectedTopic === "props"}
						>
							Props
						</TabButton>
						<TabButton
							onSelect={() => handleSelect("state")}
							isSelected={selectedTopic === "state"}
						>
							State
						</TabButton>
					</menu>
					{!selectedTopic && <p>Please select a topic</p>}
					{selectedTopic && (
						<div className="tab-content">
							<h3>{EXAMPLES[selectedTopic].title}</h3>
							<p>{EXAMPLES[selectedTopic].description}</p>
							<pre>
								<code>{EXAMPLES[selectedTopic].code}</code>
							</pre>
						</div>
					)}
				</section>
			</main>
		</div>
	);
}

export default App;
