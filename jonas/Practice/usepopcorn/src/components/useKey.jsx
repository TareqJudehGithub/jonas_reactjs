import { useEffect } from "react";

function useKey(key, action) {
	useEffect(
		function () {
			// If the user presses "Escape", call the handleCloseMovie handler
			function callback(e) {
				if (e.code.toLowerCase() === key.toLowerCase()) {
					action();
				}
			}
			document.addEventListener("keydown", callback);

			return function () {
				document.removeEventListener("keydown", callback);
			};
		},
		[key, action]
	);
}
export default useKey;
