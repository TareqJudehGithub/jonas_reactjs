import { useEffect } from "react";

function useEnterKey(key, onSetQuery, focusInput) {
	useEffect(
		function () {
			function callback(e) {
				if (document.activeElement === focusInput.current) {
					return focusInput.current.focus();
				}
				if (e.code === key) {
					onSetQuery("");
					focusInput.current.focus();
				}
			}
			document.addEventListener("keydown", callback);
			return function () {
				document.removeEventListener("keydown", callback);
			};
		},
		[key, onSetQuery, focusInput]
	);
}

export default useEnterKey;
