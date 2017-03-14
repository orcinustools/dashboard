import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {
	AppConnected,
	OverviewConnected,
	CatalogConnected,
	StackListConnected, StackDetailsConnected, StackCreateConnected,
	ServiceListConnected, ServiceDetailsConnected, ServiceCreateConnected,
	VolumeListConnected, VolumeDetailsConnected, VolumeCreateConnected
} from "../containers";

import {
	PageNotFoundPage,
	WelcomePage,
	OverviewPage,
	ContainerListPage, ContainerDetailsPage,
	VolumeListPage, VolumeDetailsPage
} from "../pages";

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { AppConnected }>
					<IndexRoute component={ WelcomePage } />
					<Route path={ "/overview" } component={ OverviewPage } />
					<Route path={ "/catalog" } component={ CatalogConnected } />
					<Route path={ "/stacks" } component={ StackListConnected } />
					<Route path={ "/stacks/new" } component={ StackCreateConnected } />
					<Route path={ "/stacks/:stackName" } component={ StackDetailsConnected } />
					<Route path={ "/services" } component={ ServiceListPage } />
					<Route path={ "/services/new" } component={ ServiceCreateConnected } />
					<Route path={ "/services/:serviceName" } component={ ServiceDetailsConnected } />
					<Route path={ "/containers" } component={ ContainerListPage }/>
					<Route path={ "/containers/:Id" } component={ ContainerDetailsPage } />
					<Route path={ "/volumes" } component={ VolumeListPage } />
					<Route path={ "/volumes/new" } component={ VolumeCreateConnected } />
					<Route path={ "/volumes/:volumeName" } component={ VolumeDetailsPage } />
					<Route path={ "*" } component={ PageNotFoundPage } />
				</Route>
			</Router>
		);
	}
}