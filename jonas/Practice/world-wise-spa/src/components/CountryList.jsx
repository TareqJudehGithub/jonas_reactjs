// @ts-ignore
import CountryItem from "./CountryItem";
// @ts-ignore
import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
// @ts-ignore
export default function CountryList({ cities, isLoading }) {
	if (isLoading) {
		return <Spinner />;
	}
	if (!cities.length) {
		return <Message message={"Add a city by clicking on map."} />;
	}
	// Check if the array already includes a duplicate of the country.
	// @ts-ignore
	const countries = cities.reduce((arr, city) => {
		if (!arr.map((el) => el.country).includes(city.country))
			return [...arr, { country: city.country, emoji: city.emoji }];
		else return arr;
	}, []);

	return (
		<ul className={styles.countryList}>
			{countries.map((country) => (
				<CountryItem key={country.country} country={country} />
			))}
		</ul>
	);
}
