function SelectPercentage({ children, percentage, onPercentage }) {
	return (
		<form>
			<label>{children} </label>
			<select
				value={percentage}
				onChange={(e) => onPercentage(Number(e.target.value))}
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
