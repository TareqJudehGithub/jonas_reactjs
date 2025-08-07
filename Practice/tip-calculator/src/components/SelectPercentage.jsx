import { useState } from "react";

function SelectPercentage({ label, myPercentage, onMyPercentage }) {
	return (
		<form>
			<label htmlFor="my-perc">{label} </label>
			<select
				name="my-perc"
				defaultValue={myPercentage}
				onChange={(e) => onMyPercentage(Number(e.target.value))}
			>
				<option value="0">Poor (0%)</option>
				<option value="5">Okay (5%)</option>
				<option value="10">Good (10%)</option>
				<option value="20">Amazing (20%)</option>
			</select>
		</form>
	);
}
export default SelectPercentage;
