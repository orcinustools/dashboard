import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// Vendors || Plugins CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import 'react-select/dist/react-select.css';
import "./vendors/css/director-style.css";
import "./vendors/css/bootstrap-select/bootstrap-select.css";

// App CSS
import "./assests/stylesheets/orcinus-style.css";

// Vendors || Plugin JavaScript
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import "./vendors/js/plugins/slimScroll/jquery.slimscroll.js";
import "./vendors/js/Director/app.js";
import "./vendors/js/plugins/bootstrap-select/bootstrap-select.js";

import store from "./store/store";

import Routes from "./routes/Routes.js";


// Render Routes component to DOM
ReactDOM.render(
	<Provider store={ store }>
		<Routes />
	</Provider>, 
	document.getElementById("app")
);