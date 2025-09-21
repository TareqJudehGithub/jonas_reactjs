import SideBar from "../components/SideBar";
import Map from "../components/Map";
// @ts-ignore
import styles from "./AppLayout.module.css";

export default function AppLayout() {
	return (
		<div className={styles.app}>
			<SideBar />
			<Map />
		</div>
	);
}
