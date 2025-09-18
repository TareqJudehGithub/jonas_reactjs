// @ts-nocheck
import { Link, NavLink } from "react-router-dom";

// styling
import styles from "./PageNav.module.css";

export default function PageNav() {
	return (
		<nav className={styles.nav}>
			<ul className={styles.ul}>
				<li>
					<NavLink to="/">Homepage</NavLink>
				</li>
				<li>
					<NavLink to="/pricing">Pricing</NavLink>
				</li>
				<li>
					<NavLink to="/product">Products</NavLink>
				</li>
			</ul>
		</nav>
	);
}
