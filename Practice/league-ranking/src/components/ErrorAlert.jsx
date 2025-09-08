import React from "react";

export default function ErrorAlert({ children, status }) {
	return (
		<div className={status === "error" ? "error" : "hideError"}>
			<p>{children}</p>
		</div>
	);
}
