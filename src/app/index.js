import React from "react";
import ReactDOM from "react-dom";

// Vendors || Plugins CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./vendors/css/director-style.css";

// App CSS
import "./assests/stylesheets/orcinus-style.css";

// Vendors || Plugin JavaScript
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./vendors/js/plugins/slimScroll/jquery.slimscroll.js";
import "./vendors/js/Director/app.js";

import Routes from "./routes/Routes.js";


// Render Routes component to DOM
ReactDOM.render(
	<Routes />, 
	document.getElementById("app")
);