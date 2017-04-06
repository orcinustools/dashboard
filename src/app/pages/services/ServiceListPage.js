/**
 * Scene for service list 
 */

import React from "react";
import { Link } from "react-router";
import ServiceList from "../../containers/services/ServiceListContainer";

export default class ServiceListPage extends React.Component {
	render() {
		return (
      <ServiceList />
		);
	}
}