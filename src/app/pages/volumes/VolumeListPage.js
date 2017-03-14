import React from "react";
import { Link } from "react-router";
import VolumeList from "../../containers/volumes/VolumeListContainer";

export default class VolumeListPage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            VOLUMES
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li className="active">VOLUMES</li>
          </ol>
        </section>
        <VolumeList />
			</div>
		);
	}
}