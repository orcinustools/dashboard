import React from "react"
import { Link } from "react-router"

import ActionButton from "./ContainerDetails/ActionButton"
import General from "./ContainerDetails/General"
import Volumes from "./ContainerDetails/Volumes"
import Mountpoints from "./ContainerDetails/Mountpoints"
import Ports from "./ContainerDetails/Ports"
import Environtments from "./ContainerDetails/Environtments"

export default class ContainerDetails extends React.Component {

  componentDidMount() {
    this.props.fetchContainer()
  }

	render() {
    const { container, fetching, fetched, error } = this.props;

    return (
			<div>
        <ActionButton />

        {/* General Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                General
              </header>
              <div className="panel-body">
              { error &&
                <h3 style={{ color: "#898989", textAlign: "center", minHeight: "100px" }}>
                  CONTAINER NOT FOUND
                </h3>
              }
              
              { fetching &&
                <div style={{ textAlign: "center", minHeight: "100px" }}>
                  <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>
                </div>
              }

              { fetched &&
                <General 
                  name={container.Name}
                  image={container.Config.Image}
                  volumeTotal={container.Mounts.length}
                  created={container.Created} />
              }
              </div>
            </div>
          </div>
        </div>

        {/* Volumes Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Volumes
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Size</th>
                      <th>Source</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  { error &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <h3>VOLUMES NOT FOUND</h3>
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetching &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>  
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetched &&
                    <Volumes />
                  }
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Mountpoints Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Mountpoints
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Volume</th>
                      <th>Used</th>
                      <th>Source</th>
                      <th>Target</th>
                    </tr>
                  </thead>
                  { error &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="6" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <h3>MOUNTPOINTS NOT FOUND</h3>
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetching &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="6" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>  
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetched &&
                    <Mountpoints />
                  }
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Ports Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Ports
              </header>
              <div className="panel-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Container</th>
                      <th>Protocol</th>
                      <th>Publish</th>
                      <th>Host</th>
                    </tr>
                  </thead>
                  { error &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <h3>PORTS NOT FOUND</h3>
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetching &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="4" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>  
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetched &&
                    <Ports />
                  }
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Variables Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Variables
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  { error &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="3" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <h3>VARIABLES NOT FOUND</h3>
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetching &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="3" style={{ textAlign: "center", color: "#898989", padding: "8px" }}>
                          <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>  
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetched &&
                    <Environtments />
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
			</div>
		);
	}
}