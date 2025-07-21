import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Arrays
const skillsList = [
	{
		id: 1,
		skillName: "HTML + CSS",
		skillColor: "blue",
		skillLevel: "advanced",
	},
	{
		id: 2,
		skillName: "JavaScript",
		skillColor: "yellow",
		skillLevel: "intermediate",
	},
	{
		id: 3,
		skillName: "Web Design",
		skillColor: "orangered",
		skillLevel: "intermediate",
	},
	{
		id: 4,
		skillName: "Git and GitHub",
		skillColor: "green",
		skillLevel: "beginner",
	},
	{
		id: 5,
		skillName: "React",
		skillColor: "lightblue",
		skillLevel: "beginner",
	},
	{
		id: 6,
		skillName: "C# + .Net MVC Core",
		skillColor: "purple",
		skillLevel: "intermediate",
	},
];

function App() {
	const intro =
		"Fullstack .NET MVC Core & React.JS Developer.\nI love my wife and kids.\nI also love learning coding.";

	return (
		<main className="card">
			<Avatar profilePic="images/ralph.png" />
			<Intro intro={intro} />
			<SkillList />
		</main>
	);
}
// Components
function Avatar(props) {
	return <img className="avatar" src={props.profilePic} alt="Me and Ralphi" />;
}
function Intro(props) {
	return <p className="data">{props.intro}</p>;
}
function SkillList() {
	return (
		<ul className="skill-list">
			{skillsList.map((skill) => (
				<Skill skillObj={skill} key={skill.id} />
			))}
		</ul>
	);
}
function Skill({ skillObj }) {
	let { skillName, skillColor, skillEmoji, skillLevel } = skillObj;
	return (
		<ul className="skill" style={{ backgroundColor: skillColor }}>
			{skillName}{" "}
			{skillLevel === "advanced"
				? (skillEmoji = <p>&#128170;</p>)
				: skillLevel === "intermediate"
				? (skillEmoji = <p>&#128077;</p>)
				: (skillEmoji = <p>&#128118;</p>)}
		</ul>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
