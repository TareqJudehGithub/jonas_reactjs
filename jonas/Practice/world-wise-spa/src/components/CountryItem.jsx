// @ts-ignore
import styles from "./CountryItem.module.css";
// @ts-ignore
function CountryItem({ country }) {
	return (
		<li className={styles.countryItem}>
			<span>{country.emoji}</span>
			<span>{country.country}</span>
		</li>
	);
}

export default CountryItem;
