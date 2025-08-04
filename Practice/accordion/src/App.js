import Accordion from "./components/Accordion";
import faqs from "./faqs";

function App() {
	return (
		<div className="">
			<Accordion data={faqs} />
		</div>
	);
}

export default App;
