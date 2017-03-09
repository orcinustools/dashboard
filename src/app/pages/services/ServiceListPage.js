/**
 * Scene for service list 
 */

import React from "react";
import { Link } from "react-router";
import ServiceList from "../../containers/services/ServiceListContainer";

export default class ServiceListPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            SERVICES
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">SERVICES</li>
          </ol>
        </section>
        <ServiceList />
			</div>
		);
	}
}