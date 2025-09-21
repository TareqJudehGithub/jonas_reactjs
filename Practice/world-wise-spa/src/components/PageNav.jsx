// @ts-nocheck
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logo";
// styling
import styles from "./PageNav.module.css";

export default function PageNav() {
	return (
		<nav className={styles.nav}>
			<Logo />
			<ul className={styles.ul}>
				<li>
					<NavLink to="/pricing">Pricing</NavLink>
				</li>
				<li>
					<NavLink to="/product">Products</NavLink>
				</li>
				<li>
					<NavLink className={styles.ctaLink} to="/Login">
						Login
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
