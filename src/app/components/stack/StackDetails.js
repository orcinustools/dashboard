import React from "react"
import { Link, browserHistory } from "react-router"

import ActionButton  from "./StackDetails/ActionButton"
import General       from "./StackDetails/General"
import Services      from "./StackDetails/Services"
import Endpoints     from "./StackDetails/Endpoints"

export default class StackDetails extends React.Component {

  componentDidMount() {
    this.props.fetchStack(this.props.id)
    this.props.fetchServices(this.props.id)
  }

	render() {
    const { stack, fetching, fetched, error } = this.props

		return (
      <div>
        <section className="content-header">
          <h1>
            { fetched && stack.Name.split('-')[1] }
          </h1>
          <ol className="breadcrumb breadcrumb-sm">
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/projects">PROJECTS</Link></li>
            <li className="active">{ fetched && stack.Name.split('-')[1] }</li>
          </ol>
        </section>

        {/*<ActionButton />*/}

        {/* General Section */}
        <div className="row">
          <div className="col-xs-12">
            <div className="panel">
              <header className="panel-heading">
                Info
              </header>
              <div className="panel-body">
              { error &&
                <h4 style={{ color: "#939393", textAlign: "center", minHeight: "100px" }}>
                  PROJECT NOT FOUND
                </h4>
              }
              
              { fetching &&
                <div style={{ textAlign: "center", minHeight: "100px" }}>
                  <i className="fa fa-refresh fa-spin fa-2x fa-fw" style={{ color: "#eee"}}></i>
                </div>
              }
              { fetched &&
                <General
                  Id={stack.Id}
                  name={stack.Name.split('-')[1]}
                  created={stack.Created} />
              }
              </div>
              {/* fetched &&
                <div className="panel-footer">
                  <button className="btn btn-primary">
                    <i className="fa fa-download fa-fw" aria-hidden="true"></i>
                    &nbsp; Download Orcinus File
                  </button>
                </div>*/
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
                      <th>Created at</th>
                      <th>Updated at</th>
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

                  { fetched && stack.servicesList && stack.servicesList.services &&
                    <Services services={ stack.servicesList.services } />
                  }
                </table>
              </div>
              { fetched &&
                <div className="panel-footer">
                  <button 
                      onClick={() => this.props.setStackName(stack.Name.split('-')[1])}
                      className="btn btn-primary create-button">
                    <i className="fa fa-plus fa-fw" aria-hidden="true"></i> 
                    Add New Service
                  </button>
                </div>
              }
            </div>
          </div>
        </div>

        {/* Endpoints /}
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
        </div>*/}
      </div>
		)
	}
}