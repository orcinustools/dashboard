import React from "react";
import { Link } from "react-router";

import ContainerListItem from "./ContainerListItem";

export default class ContainerList extends React.Component {

	componentWillMount() {
		this.props.fetchContainers();
	}

  renderContainers(containers) {
    return containers.map((container) => {
      return (
        <ContainerListItem 
          key={container.Id}
          id={container.Id}
          name={container.Names}
          image={container.Image}
          state={container.State} />
      )
    });
  }

	render() {
    const { containers } = this.props;

		return (
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
                  { this.renderContainers(containers) }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
		);
	}
}