/**
 * Smart component for Volume List Page
 */
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { fetchVolumes } from "../../actions/volumeActions";

import VolumeListItem from "./VolumeListItem";

export default class VolumeList extends React.Component {

	componentWillMount() {
		this.props.fetchVolumes();
	}

  renderVolumes(volumes) {
    return volumes.map((volume) => {
      return (
        <VolumeListItem
          key={volume.Name}
          name={volume.Name} />
      )
    })
  }

	render() {
    const { volumes, fetched, fetching, error } = this.props;

		return (
      <div className="row">
        <div className="col-xs-12">
          <div className="panel">
            <header className="panel-heading">
              <i className="fa fa-th-list fa-fw" aria-hidden="true"></i> Volume List
            </header>
            <div className="panel-body table-responsive">

              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Size</th>
                    <th>Type</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className="table-stack-list">
                  { fetching &&
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center" }}>
                        <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
                      </td>
                    </tr>
                  }

                  { error &&
                    <tr>
                      <td colSpan="6" style={{ textAlign: "center", color: "#939393" }}>
                        <h4>VOLUMES NOT FOUND</h4>
                      </td>
                    </tr>
                  }

                  { fetched && this.renderVolumes(volumes.Volumes) }
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <Link
                  style={{ borderRadius: 30 }}
                  to="/volumes/new"
                  className="btn btn-primary btn-block create-button">
                CREATE NEW VOLUME
              </Link>
            </div>
          </div>
        </div>
      </div>
		);
	}
}