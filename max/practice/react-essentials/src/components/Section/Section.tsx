import type { JSX, ReactNode } from "react";

export default function Section(props: SectionProps): JSX.Element {
	return (
		<section>
			<h2>{props.title}</h2>
			{props.children}
		</section>
	);
}
interface SectionProps {
	title: string;
	children: ReactNode;
	otherProps?: any;
}
