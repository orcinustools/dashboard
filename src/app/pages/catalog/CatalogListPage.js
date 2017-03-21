import React from "react";
import { Link } from "react-router";

import CatalogContainer from "../../containers/catalog/CatalogContainer";

export default class CatalogListPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>CATALOG</h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">CATALOG</li>
          </ol>
        </section>

       	<CatalogContainer />
			</div>
		);
	}
}