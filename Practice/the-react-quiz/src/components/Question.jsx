import React from "react";
import Option from "./Option";

export default function Question({ question, answer, dispatch }) {
	return (
		<div className="options">
			<h3>{question.question}</h3>

			{question.options.map((option, i) => (
				<Option
					key={i}
					option={option}
					index={i}
					correctOption={question.correctOption}
					answer={answer}
					dispatch={dispatch}
				/>
			))}
		</div>
	);
}
