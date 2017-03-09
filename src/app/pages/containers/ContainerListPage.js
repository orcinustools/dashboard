import React from "react";
import { Link } from "react-router";

import ContainerList from "../../containers/containers/ContainerListContainer";

export default class ContainerListPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            CONTAINERS
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">CONTAINERS</li>
          </ol>
        </section>
        <ContainerList />      
			</div>
		);
	}
}