import React from "react";
import { NavLink } from "react-router-dom";
import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

// @ts-ignore
import styles from "./AppLayout.module.css";

export default function AppLayout() {
	return (
		<div>
			<AppNav />
			<h1>App Layout</h1>
		</div>
	);
}
