import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from "../scenes/App/App.js";
import Welcome from "../scenes/welcome/Welcome";
import Catalog from "../scenes/catalog/Catalog";
import { StackList, StackDetails, StackCreate } from "../scenes/stacks";


export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { App }>
					<IndexRoute component={ Welcome} />
					<Route path={ "/catalog" } component={ Catalog } />
					<Route path={ "/stacks" } component={ StackList } />
					<Route path={ "/stacks/new" } component={ StackCreate } />
					<Route path={ "/stacks/:stackName" } component={ StackDetails } />
				</Route>
			</Router>
		);
	}
}