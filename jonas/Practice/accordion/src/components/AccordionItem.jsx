import { useState } from "react";

function AccordionItem({ num, title, text }) {
	const [isOpen, setIsOpen] = useState(false);

	// Handlers
	function handleToggle() {
		setIsOpen((isOpen) => !isOpen);
	}

	return (
		<div className={isOpen ? "item open" : "item"} onClick={handleToggle}>
			<p className="number">{num < 9 ? `0${num}` : num}</p>
			<p className="title">{title}</p>
			<p className="icon">{isOpen ? <span>-</span> : <span>+</span>}</p>
			<div className={isOpen ? "content-box" : "content-box-hidden"}>
				{text}
			</div>
		</div>
	);
}
export default AccordionItem;
