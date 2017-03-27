import React from "react"
import { Link } from "react-router"

import ActionButton  from "./StackDetails/ActionButton"
import General       from "./StackDetails/General"
import Services      from "./StackDetails/Services"
import Endpoints     from "./StackDetails/Endpoints"

export default class StackDetails extends React.Component {

  componentDidMount() {
    this.props.fetchStack()
  }

	render() {
    const { stack, fetching, fetched, error } = this.props

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
                <h4 style={{ color: "#939393", textAlign: "center", minHeight: "100px" }}>
                  GROUP NOT FOUND
                </h4>
              }
              
              { fetching &&
                <div style={{ textAlign: "center", minHeight: "100px" }}>
                  <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>
                </div>
              }
              { fetched &&
                <General />
              }
              </div>
              { fetched &&
                <div className="panel-footer">
                  <button className="btn btn-primary">
                    <i className="fa fa-download fa-fw" aria-hidden="true"></i>
                    &nbsp; Download Orcinus File
                  </button>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Services
              </header>
              <div className="panel-body table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Status</th>
                      <th>Info</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  { error &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
                          <h4>SERVICES NOT FOUND</h4>
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetching &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#93939393", padding: "8px" }}>
                          <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>  
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetched &&
                    <Services />
                  }
                </table>
              </div>
              { fetched &&
                <div className="panel-footer">
                  <Link to="/catalog" className="btn btn-success"><i className="fa fa-plus fa-fw" aria-hidden="true"></i>  Add New Service</Link>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Endpoints */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Endpoints
              </header>
              <div className="panel-body">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Protocol/Port</th>
                      <th>Link</th>
                    </tr>
                  </thead>
                  { error &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#939393", padding: "8px" }}>
                          <h4>ENDPOINTS NOT FOUND</h4>
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetching &&
                    <tbody className="table-stack-list">
                      <tr>
                        <td colSpan="5" style={{ textAlign: "center", color: "#93939393", padding: "8px" }}>
                          <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>  
                        </td>
                      </tr>                   
                    </tbody>
                  }

                  { fetched &&
                    <Endpoints />
                  }
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
		)
	}
}