import ReactDOM from "react-dom";

import "boostrap/dist/css/boostrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "jquery/dist/jquery.min.js";
import "boostrap/dist/js/boostrap.min.js";

import Routes from "./routes/Routes.js";


// Render Routes component to DOM
ReactDOM.render(
	<Routes />, 
	document.getElementById("app")
);