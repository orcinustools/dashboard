import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";

import {
	VolumeCreateConnected
} from "../containers";

import {
	AppPage,
	PageNotFoundPage,
	WelcomePage,
	OverviewPage,
	CatalogListPage,
	StackListPage, StackDetailsPage, StackCreatePage,
	ServiceListPage, ServiceCreatePage, ServiceDetailsPage,
	ContainerListPage, ContainerDetailsPage,
	VolumeListPage, VolumeDetailsPage,
	FirewallPage,
	LoginPage, SignupPage
} from "../pages";

import { requireAuth } from '../utils/AuthService'

export default class Routes extends React.Component {

	scrollToTop() {
	  window.scrollTo(0, 0);
	}

	render() {
		return (
			<Router history={ browserHistory }>
				<Route path={ "/" } component= { AppPage }>
					<IndexRoute component={ WelcomePage } onEnter={ requireAuth } />
					<Route path={ "/overview" } component={ OverviewPage } onEnter={ requireAuth } />
					<Route path={ "/catalog" } component={ CatalogListPage } onEnter={ requireAuth } />
					<Route path={ "/stacks" } component={ StackListPage } onEnter={ requireAuth } />
					<Route path={ "/stacks/new" } component={ StackCreatePage } onEnter={ requireAuth } />
					<Route path={ "/stacks/:Id" } component={ StackDetailsPage } onEnter={ requireAuth } />
					<Route path={ "/services" } component={ ServiceListPage } onEnter={ requireAuth } />
					<Route path={ "/services/new" } component={ ServiceCreatePage } onEnter={ requireAuth } />
					<Route path={ "/services/:Id" } component={ ServiceDetailsPage } onEnter={ requireAuth } />
					<Route path={ "/containers" } component={ ContainerListPage } onEnter={ requireAuth } />
					<Route path={ "/containers/:Id" } component={ ContainerDetailsPage } onEnter={ requireAuth } />
					<Route path={ "/volumes" } component={ VolumeListPage } onEnter={ requireAuth } />
					<Route path={ "/volumes/new" } component={ VolumeCreateConnected } onEnter={ requireAuth } />
					<Route path={ "/volumes/:volumeName" } component={ VolumeDetailsPage } onEnter={ requireAuth } />
					<Route path={ "/firewalls" } component={ FirewallPage } onEnter={ requireAuth } />
				</Route>
				<Route path={ "/signin" } component={ LoginPage } onEnter={this.scrollToTop} />
				<Route path={ "/signup" } component={ SignupPage } onEnter={this.scrollToTop} />
				<Route path={ "*" } component={ PageNotFoundPage } onEnter={this.scrollToTop} />
			</Router>
		);
	}
}

