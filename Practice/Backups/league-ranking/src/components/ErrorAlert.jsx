import React from "react";

// @ts-ignore
export default function ErrorAlert({ children, status }) {
	return (
		<div className={status === "error" ? "error" : "hideError"}>
			<p>{children}</p>
		</div>
	);
}
