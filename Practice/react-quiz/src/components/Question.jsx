import React from "react";
import Options from "./Options";

export default function Question({ question, dispatch, answer }) {
	return (
		<div>
			<h2>Question Component</h2>
			<h4>Question: {question.question}</h4>

			{/* extract each item and it's index  */}
			<div className="options">
				{question.options.map((option, index) => (
					<Options
						key={option}
						option={option}
						index={index}
						dispatch={dispatch}
						question={question}
						answer={answer}
					/>
				))}
			</div>
		</div>
	);
}
