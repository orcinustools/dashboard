import React from "react";
import { Link } from "react-router";

import ServiceCreate from "../../containers/services/ServiceCreateContainer";

export default class ServiceCreatePage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            SERVICE WIZARD
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><a href="/">HOME</a></li>
            <li><a href="/services">SERVICES</a></li>
            <li className="active">WIZARD</li>
          </ol>
        </section>
        <ServiceCreate />
			</div>
		)
	}
}