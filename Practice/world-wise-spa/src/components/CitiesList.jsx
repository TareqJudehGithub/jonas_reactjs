import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";

// @ts-ignore
import styles from "./CityList.module.css";
// @ts-ignore
export default function CitiesList({ cities, isLoading }) {
	if (isLoading) {
		return <Spinner />;
	}
	if (!cities.length) {
		return <Message message={"Add a city by clicking on map."} />;
	}
	return (
		<ul className={styles.cityList}>
			{cities.map((city) => (
				<CityItem key={city.id} city={city} />
			))}
		</ul>
	);
}
