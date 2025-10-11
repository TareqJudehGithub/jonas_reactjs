// Models
import { CORE_CONCEPTS } from "./models/data";
// Custom Components
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept/CoreConcept";
import TabButton from "./components/TabButton/TabButton";

function App() {
	function handleSelect() {
		console.log("Button click!");
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
						<TabButton onSelect={handleSelect}>Components</TabButton>
						<TabButton onSelect={handleSelect}>JSX</TabButton>
						<TabButton onSelect={handleSelect}>Props</TabButton>
						<TabButton onSelect={handleSelect}>State</TabButton>
					</menu>
					Dynamic content incoming..
				</section>
			</main>
		</div>
	);
}

export default App;
