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

// import all favico
// import "./assests/images/favico/apple-touch-icon-57x57.png"
// import "./assests/images/favico/apple-touch-icon-114x114.png"
// import "./assests/images/favico/apple-touch-icon-72x72.png"
// import "./assests/images/favico/apple-touch-icon-144x144.png"
// import "./assests/images/favico/apple-touch-icon-60x60.png"
// import "./assests/images/favico/apple-touch-icon-120x120.png"
// import "./assests/images/favico/apple-touch-icon-76x76.png"
// import "./assests/images/favico/apple-touch-icon-152x152.png"
// import "./assests/images/favico/favicon-196x196.png"
// import "./assests/images/favico/favicon-96x96.png"
// import "./assests/images/favico/favicon-32x32.png"
// import "./assests/images/favico/favicon-16x16.png"
// import "./assests/images/favico/favicon-128.png"
// import "./assests/images/favico/mstile-144x144.png"
// import "./assests/images/favico/mstile-70x70.png"
// import "./assests/images/favico/mstile-150x150.png"
// import "./assests/images/favico/mstile-310x150.png"
import "./assests/images/favico/favicon.ico"
// import "./assests/images/favico"

import store from "./store/store";

import Routes from "./routes/Routes.js";


// Render Routes component to DOM
ReactDOM.render(
	<Provider store={ store }>
		<Routes />
	</Provider>, 
	document.getElementById("app")
);