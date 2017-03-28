/**
 * Smart component rename all component to component-connected
 */

import AppConnected from "./app/AppContainer";
import OverviewConnected from "./overview/OverviewContainer";
import CatalogConnected from "./catalog/CatalogContainer";
import StackListConnected from "./stacks/StackListContainer";
import StackDetailsConnected from "./stacks/StackDetailsContainer";
import StackCreateConnected from "./stacks/StackCreateContainer";
import ServiceListConnected from "./services/ServiceListContainer";
import ServiceDetailsConnected from "./services/ServiceDetailsContainer";
import ServiceCreateConnected from "./services/ServiceCreateContainer";
import ContainerListConnected from "./containers/ContainerListContainer";
import ContainerDetailsConnected from "./containers/ContainerDetailsContainer";
import VolumeListConnected from "./volumes/VolumeListContainer";
import VolumeDetailsConnected from "./volumes/VolumeDetailsContainer";
import VolumeCreateConnected from "./volumes/VolumeCreateContainer";

export {
	AppConnected,
	OverviewConnected,
	CatalogConnected,
	StackListConnected, StackDetailsConnected, StackCreateConnected,
	ServiceListConnected, ServiceDetailsConnected, ServiceCreateConnected,
	ContainerListConnected, ContainerDetailsConnected,
	VolumeListConnected, VolumeDetailsConnected, VolumeCreateConnected
}