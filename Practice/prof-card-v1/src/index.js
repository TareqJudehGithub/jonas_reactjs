import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Arrays
const skillsList = [
	{
		id: 1,
		skillName: "HTML + CSS",
		skillColor: "blue",
		skillEmoji: <p>&#128526;</p>,
	},
	{
		id: 2,
		skillName: "JavaScript",
		skillColor: "yellow",
		skillEmoji: <p>"&#129300;"</p>,
	},
	{
		id: 3,
		skillName: "Web Design",
		skillColor: "orangered",
		skillEmoji: <p>&#129321;</p>,
	},
	{
		id: 4,
		skillName: "Git and GitHub",
		skillColor: "green",
		skillEmoji: <p>&#129395;</p>,
	},
	{
		id: 5,
		skillName: "React",
		skillColor: "lightblue",
		skillEmoji: <p>&#129488;</p>,
	},
	{
		id: 6,
		skillName: "C# + .Net MVC Core",
		skillColor: "purple",
		skillEmoji: <p>"&#128568;"</p>,
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
function Skill(props) {
	return (
		<ul
			className="skill"
			style={{ backgroundColor: props.skillObj.skillColor }}
		>
			{props.skillObj.skillName} {props.skillObj.skillEmoji}
		</ul>
	);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
