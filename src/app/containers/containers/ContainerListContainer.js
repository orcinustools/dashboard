/**
 * Smart component for Container List Page
 */
import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import ContainerListItem from "../../components/container/ContainerListItem";

import { fetchContainers } from "../../actions/containerActions";

@connect((store) => {
	return {
		containers: store.containerState
	};
})

export default class ContainerList extends React.Component {

	componentWillMount() {
		this.props.dispatch(fetchContainers());
	}
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

        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                <i className="fa fa-th-list" aria-hidden="true"></i> List
              </header>
              <div className="panel-body table-responsive">

                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Image</th>
                      <th>Info</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody className="table-stack-list">
                    <ContainerListItem />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}