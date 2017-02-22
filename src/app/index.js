import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";

import "./assests/stylesheets/orcinus-style.css";
import "./vendors/css/director-style.css";

import Routes from "./routes/Routes.js";


// Render Routes component to DOM
ReactDOM.render(
	<Routes />, 
	document.getElementById("app")
);