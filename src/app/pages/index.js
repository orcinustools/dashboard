import App from "./app/App";
import { ContainerListPage, ContainerDetailsPage } from "./containers";
import { ServiceListPage, ServiceDetailsPage, ServiceCreatePage } from "./services";
import { StackDetails,	StackCreate } from "./stacks";
import { VolumeListPage, VolumeCreatePage, VolumeDetailsPage } from "./volumes";
import WelcomePage from "./welcome/WelcomePage";
import OverviewPage from "./overview/OverviewPage";
import PageNotFoundPage from "./pagenotfound/PageNotFoundPage";
import CatalogPage from "./catalog/CatalogPage";

export {
	App,
	ContainerListPage, ContainerDetailsPage,
	ServiceListPage, ServiceDetailsPage, ServiceCreatePage,
 	StackDetails,	StackCreate,
	VolumeListPage, VolumeCreatePage, VolumeDetailsPage,
	WelcomePage,
	CatalogPage,
	OverviewPage,
	PageNotFoundPage
}