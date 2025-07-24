import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

const todos = [
	{ id: 1, task: "Buy milk" },
	{ id: 2, task: "Walk the dog" },
	{ id: 3, task: "Read a book" },
];
const students = [
	{ id: 1, name: "Alice", grade: 85, isPassed: true },
	{ id: 2, name: "Bob", grade: 45, isPassed: false },
	{ id: 3, name: "Charlie", grade: 78, isPassed: true },
];

function App() {
	return (
		<>
			<Dashboard />
			<TodoList />
			<StudentList />
		</>
	);
}

// Component
function Dashboard() {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const username = "John Smith";

	// handlers
	function handleLogIn() {
		return setIsLoggedIn(!isLoggedIn);
	}
	return (
		<div className="container-dashboard">
			<h2>Login Dashboard</h2>
			{!isLoggedIn ? (
				<>
					<p>Please log in.</p>
					<button onClick={handleLogIn}>Login</button>
				</>
			) : (
				<>
					<p>Welcome, {username}!</p>
					<button onClick={handleLogIn}>Logout</button>
				</>
			)}
		</div>
	);
}

function TodoList() {
	return (
		<div className="container-todos">
			<h3>TODOs List</h3>
			<ul>
				{todos.map((todo) => (
					<TodoItem key={todo.id} todosObj={todo} />
				))}
			</ul>
		</div>
	);
}
function TodoItem({ todosObj }) {
	const [isComplete, setIsComplete] = useState(false);
	const { task } = todosObj;

	// Handlers
	function handleCompleted() {
		return setIsComplete(!isComplete);
	}

	return (
		<li className="todo-items">
			<span className={isComplete ? "task-completed" : ""}>
				{task} <button onClick={handleCompleted}>Check</button>
			</span>
		</li>
	);
}

function StudentList() {
	return (
		<div className="container-students">
			{" "}
			<h2>Students List with Grades</h2>
			<div className="students-list">
				{students.map((student) => (
					<StudentCard key={student.id} studentObj={student} />
				))}
			</div>
		</div>
	);
}

function StudentCard({ studentObj }) {
	const { name, grade, isPassed } = studentObj;
	return (
		<div className="student-card">
			<h4>{name}</h4>
			<p>{grade}</p>

			{isPassed ? (
				<p>
					<span className="passed">Passed </span>
					<span className="check">
						<FontAwesomeIcon icon={faCheck} />
					</span>
				</p>
			) : (
				<p>
					<span className="failed">Failed</span>
					<span className="cross">
						<FontAwesomeIcon icon={faX} />
					</span>
				</p>
			)}
		</div>
	);
}
export default App;
