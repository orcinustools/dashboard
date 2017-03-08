/**
 * Smart component for Volume List Page
 */
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import { fetchVolumes } from "../../actions/volumeActions";

@connect((store) => {
	return {
		volumes: store.volumeState
	}
})

export default class VolumeList extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchVolumes())
	}
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
                      <th>ID</th>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Type</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <tr>
                      <td>asfasdfasd</td>
                      <td><Link to="/volumes/wp-vol">wp-vol</Link></td>
                      <td>2GB</td>
                      <td>nfs</td>
                      <td>
                        <button className="btn btn-default btn-sm list-stack-action">
                          <i className="fa fa-sliders" aria-hidden="true"></i>
                        </button>
                        <button className="btn btn-danger btn-sm list-stack-action">
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                    
                  </tbody>
                </table>
              </div>
              <div className="panel-footer">
                <Link to="/volumes/new" className="btn btn-primary btn-block">CREATE NEW VOLUME</Link>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}