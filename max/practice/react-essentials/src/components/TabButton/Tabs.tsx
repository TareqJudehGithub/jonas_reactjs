import type { JSX, ReactNode } from "react";

export default function Tabs({
	buttons,
	children,
	ButtonsContainer = "menu",
}: TabsProps): JSX.Element {
	// const ButtonContainer = props.buttonsContainer;
	return (
		<>
			<ButtonsContainer>{buttons}</ButtonsContainer>
			{children}
		</>
	);
}
interface TabsProps {
	children: ReactNode;
	buttons: ReactNode;
	ButtonsContainer?: any;
}
