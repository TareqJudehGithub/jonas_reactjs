export interface Core {
	image: string;
	title: string;
	description: string;
}
export interface InnerObj {
	title: string;
	description: string;
	code: string;
}
export interface OuterObj {
	[key: string]: InnerObj;
}
