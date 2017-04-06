import React from "react";
import { Link } from "react-router";

import ServiceDetails from "../../containers/services/ServiceDetailsContainer";

export default class ServiceDetailsPage extends React.Component {
	render() {
		return (
      <ServiceDetails id={this.props.params.Id} />
		);
	}
}