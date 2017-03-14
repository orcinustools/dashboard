import React from "react";
import { Link } from "react-router";

import ServiceDetails from "../../containers/services/ServiceDetailsContainer";

export default class ServiceDetailsPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            wp-app
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/services">SERVICES</Link></li>
            <li className="active">wp-app</li>
          </ol>
        </section>
        <ServiceDetails id={this.props.params.Id} />
			</div>
		);
	}
}