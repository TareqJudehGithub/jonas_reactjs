export interface Core {
	image: string;
	title: string;
	description: string;
}
export interface ExamplesType {
	components: {
		title: string;
		description: string;
		code: string;
	};
	jsx: {
		title: string;
		description: string;
		code: string;
	};
	props: {
		title: string;
		description: string;
		code: string;
	};
	state: {
		title: string;
		description: string;
		code: string;
	};
}
