import React from "react";
import { Router, Route, browserHistory } from "react-router";

import App from "../scenes/App/App.js";

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { App }/>
			</Router>
		);
	}
}