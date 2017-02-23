import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import App from "../scenes/App/App.js";
import Welcome from "../scenes/welcome/Welcome";
import Catalog from "../scenes/catalog/Catalog";
import { StackList, StackDetails, StackCreate } from "../scenes/stacks";
import { ServiceList, ServiceDetails, ServiceCreate } from "../scenes/services";
import { ContainerList, ContainerDetails } from "../scenes/containers";
import { VolumeList, VolumeDetails, VolumeCreate } from "../scenes/volumes";


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
					<Route path={ "/services" } component={ ServiceList } />
					<Route path={ "/services/new" } component={ ServiceCreate } />
					<Route path={ "/services/:serviceName" } component={ ServiceDetails } />
					<Route path={ "/containers" } component={ ContainerList }/>
					<Route path={ "/containers/:containerName" } component={ ContainerDetails } />
					<Route path={ "/volumes" } component={ VolumeList } />
					<Route path={ "/volumes/new" } component={ VolumeCreate } />
					<Route path={ "/volumes/:volumeName" } component={ VolumeDetails } />
				</Route>
			</Router>
		);
	}
}