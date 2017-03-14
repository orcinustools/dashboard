import React from "react";
import { Link } from "react-router";

import ContainerDetails from "../../containers/containers/ContainerDetailsContainer";

export default class ContainerDetailsPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            wp-app.1
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/containers">CONTAINERS</Link></li>
            <li className="active">wp-app.1</li>
          </ol>
        </section>

        <ContainerDetails />
			</div>
		);
	}
}