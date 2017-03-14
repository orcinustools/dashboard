import React from "react";
import { Link } from "react-router";

import VolumeCreateContainer from "../../containers/volumes/VolumeCreateContainer";

export default class VolumeCreatePage extends React.Component {
	render() {
		return (
			<div>
        <section className="content-header">
          <h1>
            CREATE NEW VOLUME
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/volumes">VOLUMES</Link></li>
            <li className="active">Create new Volume</li>
          </ol>
        </section>

        <VolumeCreateContainer />
			</div>
		);
	}
}