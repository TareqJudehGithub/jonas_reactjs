import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
	const [curOpen, setIsOpen] = useState(null);

	return (
		<div className="accordion">
			{data.map((el, i) => (
				<AccordionItem
					curOpen={curOpen}
					onOpen={setIsOpen}
					key={el.title}
					num={i}
					title={el.title}
				>
					{el.text}
				</AccordionItem>
			))}

			{/* Adding another (reusing a custom built component)*/}
			<AccordionItem
				key="Key 1"
				num={22}
				title="test 1"
				curOpen={curOpen}
				onOpen={setIsOpen}
			>
				<p>paragraph next</p>
				<ul>
					<li>list item - 1</li>
					<li>list item - 2</li>
					<li>list item - 3</li>
				</ul>
			</AccordionItem>
		</div>
	);
}
export default Accordion;
