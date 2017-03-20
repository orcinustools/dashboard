import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {
	AppConnected,
	OverviewConnected,
	CatalogConnected,
	StackListConnected, StackDetailsConnected, StackCreateConnected,
	VolumeListConnected, VolumeDetailsConnected, VolumeCreateConnected
} from "../containers";

import {
	PageNotFoundPage,
	WelcomePage,
	OverviewPage,
	CatalogPage,
	StackListPage,
	ServiceListPage, ServiceCreatePage, ServiceDetailsPage,
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
					<Route path={ "/catalog" } component={ CatalogPage } />
					<Route path={ "/stacks" } component={ StackListPage } />
					<Route path={ "/stacks/new" } component={ StackCreateConnected } />
					<Route path={ "/stacks/:stackName" } component={ StackDetailsConnected } />
					<Route path={ "/services" } component={ ServiceListPage } />
					<Route path={ "/services/new" } component={ ServiceCreatePage } />
					<Route path={ "/services/:Id" } component={ ServiceDetailsPage } />
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