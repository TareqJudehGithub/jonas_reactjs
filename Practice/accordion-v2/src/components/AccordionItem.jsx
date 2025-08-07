import { useState } from "react";

function AccordionItem({ curOpen, onOpen, num, title, children }) {
	// Calculate whether the item is open or not
	const isOpen = num === curOpen;

	// Handlers
	function handleToggle() {
		onOpen(isOpen ? null : num); // Collapse/Extend the menu
	}

	return (
		<div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
			<p className="number">{num < 9 ? `0${num}` : num}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? <span>-</span> : <span>+</span>}</p>
			<div className={isOpen ? "content-box" : "content-box-hidden"}>
				{children}
			</div>
		</div>
	);
}
export default AccordionItem;
