function Stats({ dataProps }) {
	let itemstotal = dataProps.length;
	let items = dataProps.map((item) => item.amount);

	let itemsAmountTotal = items.reduce((acc, amm) => acc + Number(amm), 0);

	return (
		<footer className="container p-0">
			<table className="table table-borderless">
				<thead className="table-header"></thead>
				<tbody className="bg-black">
					<tr className="bg-black">
						<td className="bg-black" style={{ color: "whitesmoke" }}>
							No. of items: {itemstotal}
						</td>
						<td className="bg-black" style={{ color: "whitesmoke" }}>
							Expenses total: JOD {itemsAmountTotal}
						</td>
					</tr>
				</tbody>
			</table>
		</footer>
	);
}

export default Stats;
