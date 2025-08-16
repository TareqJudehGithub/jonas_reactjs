import { useState } from "react";

function TabPractice({ activeTab, num, onClick }) {
	// States

	const activeTabStyle = {
		backgroundColor: "lightblue",
		fontSize: "20px",
	};

	return (
		<div>
			<button
				style={
					activeTab === num ? activeTabStyle : { backgroundColor: "black" }
				}
				onClick={() => onClick(num)}
			>
				Tab {num + 1}
			</button>
		</div>
	);
}
export default TabPractice;
