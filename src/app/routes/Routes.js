import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {
	AppConnected,
	OverviewConnected,
	CatalogConnected,
	StackListConnected, StackDetailsConnected, StackCreateConnected,
	ServiceListConnected, ServiceDetailsConnected, ServiceCreateConnected,
	ContainerListConnected, ContainerDetailsConnected,
	VolumeListConnected, VolumeDetailsConnected, VolumeCreateConnected
} from "../containers";

import {
	PageNotFound
} from "../scenes";


export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { AppConnected }>
					<IndexRoute component={ OverviewConnected } />
					<Route path={ "/overview" } component={ OverviewConnected } />
					<Route path={ "/catalog" } component={ CatalogConnected } />
					<Route path={ "/stacks" } component={ StackListConnected } />
					<Route path={ "/stacks/new" } component={ StackCreateConnected } />
					<Route path={ "/stacks/:stackName" } component={ StackDetailsConnected } />
					<Route path={ "/services" } component={ ServiceListConnected } />
					<Route path={ "/services/new" } component={ ServiceCreateConnected } />
					<Route path={ "/services/:serviceName" } component={ ServiceDetailsConnected } />
					<Route path={ "/containers" } component={ ContainerListConnected }/>
					<Route path={ "/containers/:containerName" } component={ ContainerDetailsConnected } />
					<Route path={ "/volumes" } component={ VolumeListConnected } />
					<Route path={ "/volumes/new" } component={ VolumeCreateConnected } />
					<Route path={ "/volumes/:volumeName" } component={ VolumeDetailsConnected } />
					<Route path={ "*" } component={ PageNotFound } />
				</Route>
			</Router>
		);
	}
}