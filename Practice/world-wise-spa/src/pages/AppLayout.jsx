import React from "react";
import { NavLink } from "react-router-dom";
import AppNav from "../components/AppNav";
import PageNav from "../components/PageNav";

import styles from "./AppLayout.module.css";

export default function AppLayout() {
	return (
		<div>
			<AppNav />
			<p>App Layout</p>
		</div>
	);
}
