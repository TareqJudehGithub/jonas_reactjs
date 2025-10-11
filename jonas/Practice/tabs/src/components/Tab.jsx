function Tab({ num, activeTab, onClick, children }) {
	return (
		<button
			className={num === activeTab ? "tab active" : "tab"}
			onClick={() => onClick(num)}
		>
			{children}
		</button>
	);
}
export default Tab;
