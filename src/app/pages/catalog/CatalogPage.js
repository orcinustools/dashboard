import React from "react";
import { Link } from "react-router";

import Catalog from "../../containers/catalog/CatalogContainer";

export default class CatalogPage extends React.Component {
	render() {
		return (
			<div>
       <Catalog />
			</div>
		);
	}
}