import React from "react";
import { Link } from "react-router";

import ContainerListItem from "./ContainerListItem";

export default class ContainerList extends React.Component {

  constructor(props) {
    super(props);
    
    this.handleOnPause    = this.handleOnPause.bind(this)
    this.handleOnUnpause  = this.handleOnUnpause.bind(this)
    this.handleOnDelete   = this.handleOnDelete.bind(this)
  }

	componentDidMount() {
		this.props.fetchContainers();
	}

  handleOnPause(id) {
    this.props.pauseContainer(id)
    console.log(id)
  }

  handleOnUnpause(id) {
    this.props.unPauseContainer(id)
    console.log(id)
  }

  handleOnDelete(id) {
    this.props.deleteContainer(id)
    console.log(id)
  }

  renderContainers(containers) {
    return containers.map((container) => {
      return (
        <ContainerListItem 
          key={container.Id}
          id={container.Id}
          name={container.Names[0]}
          image={container.Image}
          state={container.State}
          service={container.Labels["com.docker.swarm.service.name"]}
          pause={this.handleOnPause}
          unPause={this.handleOnUnpause}
          delete={this.handleOnDelete} />
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