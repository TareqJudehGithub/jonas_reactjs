import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
	return (
		<div className="accordion">
			{data.map((el, i) => (
				<AccordionItem
					key={el.title}
					num={i}
					title={el.title}
					text={el.text}
				/>
			))}
		</div>
	);
}
export default Accordion;
