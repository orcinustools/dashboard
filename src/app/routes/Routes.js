import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {
	App, 
	Welcome, 
	Catalog, 
	StackList, StackDetails, StackCreate, 
	ServiceList, ServiceDetails, ServiceCreate,
	ContainerList, ContainerDetails,
	VolumeList, VolumeDetails, VolumeCreate 
} from "../scenes";


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