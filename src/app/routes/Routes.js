import React from "react";
import { Router, Route, browserHistory } from "react-router";

import { Header } from "../components/";

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { Header }/>
			</Router>
		);
	}
}