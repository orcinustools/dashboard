import React from "react";
import { Link } from "react-router";

import ContainerListItem from "./ContainerListItem";

export default class ContainerList extends React.Component {

	componentDidMount() {
		this.props.fetchContainers();
	}

  renderContainers(containers) {
    return containers.map((container) => {
      return (
        <ContainerListItem 
          key={container.ID}
          id={container.ID}
          name={container.Names}
          image={container.Spec.ContainerSpec.Image}
          state={container.State} />
      )
    });
  }

	render() {

    const { containers, fetching, fetched, error } = this.props;

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
                  { fetching &&
                    <tr>
                      <td colSpan="6" style={{textAlign: "center"}}>
                        <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#939393"}}></i>
                      </td>
                    </tr>
                  }

                  { fetched &&
                    this.renderContainers(containers)
                  }

                  { error &&
                    <tr>
                      <td colSpan="6" style={{textAlign: "center", color: "#939393"}}>
                        <h4>CONTAINERS NOT FOUND</h4>
                      </td>
                    </tr>
                  }
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