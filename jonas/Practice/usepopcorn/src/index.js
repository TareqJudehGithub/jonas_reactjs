import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// Styling
import "./index.css";

// import StarRating from "./components/StarRating";
// import Test from "./components/Test";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
