import { useState } from "react";

import TabPractice from "./TabPractice";
import TabContent from "./TabContent";

function TabbedPractice({ content }) {
	// States
	let [activeTab, setActiveTab] = useState(0);

	// Handlers
	function handleActiveTab(num) {
		setActiveTab(num);
		console.log("click on tab button");
		console.log(activeTab);
	}
	return (
		<div>
			<div>
				<TabPractice num={0} activeTab={activeTab} onClick={handleActiveTab} />
				<TabPractice num={1} activeTab={activeTab} onClick={handleActiveTab} />
				<TabPractice num={2} activeTab={activeTab} onClick={handleActiveTab} />
			</div>
			{activeTab <= 2 ? (
				<TabContent item={content.at(activeTab)} />
			) : (
				<TabContent item={content.at(0)} />
			)}
		</div>
	);
}
export default TabbedPractice;
