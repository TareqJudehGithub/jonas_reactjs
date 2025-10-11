import {
	Nav,
	Navbar,
	NavbarBrand,
	NavItem,
	NavLink,
	Form,
} from "react-bootstrap";

function Header() {
	return (
		<>
			<Nav className="nav">
				<NavbarBrand>Logo</NavbarBrand>
				<Form className="form-inline form">
					<input
						className="form-control w-100"
						type="text"
						placeholder="Search.. "
					/>
				</Form>
				<Navbar>
					<NavItem>
						<NavLink className="active link">Home</NavLink>
					</NavItem>
					<NavItem>
						<NavLink className="link">Link</NavLink>
					</NavItem>
				</Navbar>
			</Nav>
		</>
	);
}

export default Header;
