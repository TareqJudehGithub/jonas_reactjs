import Logo from "./Logo";
import AppNav from "./AppNav";
// @ts-ignore
import styles from "./SideBar.module.css";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function SideBar() {
	return (
		<div className={styles.sidebar}>
			<Logo />
			<AppNav />
			<Outlet />
			<Footer />
		</div>
	);
}
