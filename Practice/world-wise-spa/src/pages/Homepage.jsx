import { Link, NavLink } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

export default function Homepage() {
	return (
		<div>
			{/* This will serve as header nav*/}
			<PageNav />
			<AppNav />
			<h1>Worldwise - Homepage</h1>
			<NavLink to="/app">App Layout</NavLink>
		</div>
	);
}
