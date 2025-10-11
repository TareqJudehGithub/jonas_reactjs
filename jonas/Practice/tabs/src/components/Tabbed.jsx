import { useState } from "react";
import Tab from "./Tab";
import TabContent from "./TabContent";

function Tabbed({ content }) {
	// States
	const [activeTab, setActiveTab] = useState(0);
	const [showDetails, setShowDetails] = useState(false);

	// Handlers
	function handleTabSwitch(num) {
		setActiveTab(num);
		console.log(`Click on Tab - ${num}`);
		console.log(activeTab);
	}

	function handleShowDetails() {
		setShowDetails((show) => !show);
	}

	return (
		<div>
			<Tab num={0} activeTab={activeTab} onClick={handleTabSwitch}>
				React
			</Tab>
			<Tab num={1} activeTab={activeTab} onClick={handleTabSwitch}>
				State
			</Tab>
			<Tab num={2} activeTab={activeTab} onClick={handleTabSwitch}>
				Props
			</Tab>

			<TabContent
				item={content.at(activeTab)}
				showDetails={showDetails}
				onClick={handleShowDetails}
			/>
		</div>
	);
}
export default Tabbed;
