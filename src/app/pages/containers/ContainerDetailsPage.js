import React from "react";

import ContainerDetails from "../../containers/containers/ContainerDetailsContainer";

export default class ContainerDetailsPage extends React.Component {
	render() {
		return (
      <ContainerDetails id={ this.props.params.Id } />
		);
	}
}