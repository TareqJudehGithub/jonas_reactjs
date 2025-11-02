import { useState, type JSX } from "react";
import { EXAMPLES } from "../models/data";
import TabButton from "./TabButton/TabButton";
import Section from "./Section/Section";
import Tabs from "./TabButton/Tabs";

export default function Examples(): JSX.Element {
	// States
	const [selectedTopic, setSelectedTopic] = useState<string>();

	// Handles
	function handleSelect(selectedButton: string | any): void {
		setSelectedTopic(selectedButton);
	}
	return (
		<Section title="Examples">
			<Tabs
				buttons={
					<>
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
					</>
				}
			>
				{/* TabButton content: */}
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
			</Tabs>
		</Section>
	);
}
