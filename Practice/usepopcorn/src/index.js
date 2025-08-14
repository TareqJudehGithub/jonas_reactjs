import React from "react";
import ReactDOM from "react-dom/client";

//import App from "./App";
import StarRating from "./components/StarRating";
import Test from "./components/Test";
// Styling
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		{/* <App /> */}
		<StarRating
			maxRating={5}
			className="test2"
			messages={["Terrible", "Bad", "Okay", "Good", "Amazing!"]}
		/>
		<StarRating color="red" className="test" size={20} defaultRating={3} />
		<Test />
	</React.StrictMode>
);
