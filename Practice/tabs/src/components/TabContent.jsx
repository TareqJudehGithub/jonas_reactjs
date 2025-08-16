function TabContent({ item, showDetails, onClick }) {
	return (
		<div className="tab-content">
			<h4>{item.summary}</h4>
			{showDetails ? (
				<p className="tab-actions">
					<span onClick={onClick}>Show Details</span>
				</p>
			) : (
				<p className="tab-actions">
					{item.details}
					<span onClick={onClick} className="">
						Hide details
					</span>
				</p>
			)}
		</div>
	);
}
export default TabContent;
