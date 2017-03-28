import React from "react";
import { Link } from "react-router";

import VolumeDetailsContainer from "../../containers/volumes/VolumeDetailsContainer";

export default class VolumeDetailsPage extends React.Component {
  render() {
    return (
      <div>
        <section className="content-header">
          <h1>
            wp-vol
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/volumes">VOLUMES</Link></li>
            <li className="active">wp-vol</li>
          </ol>
        </section>
        <VolumeDetailsContainer />
      </div>
    )
  }
}