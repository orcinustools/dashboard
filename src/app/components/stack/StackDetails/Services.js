import React 		from "react"
import { Link } from "react-router"

export default class Services extends React.Component {
	render() {
		return (
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
                <tbody className="table-stack-list">
                  <tr>
                    <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i> 
                      <Link to="/services/wp-app">&nbsp; wp-app</Link>
                    </td>
                    <td><span className="label label-success">RUNNING</span></td>
                    <td>
                      <ul className="list-child">
                        <li>
                          <i className="fa fa-cube fa-fw" aria-hidden="true"></i>
                          &nbsp; 1 Container
                        </li>
                        <li>
                          <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
                          &nbsp; 1 Volumes
                        </li>
                      </ul>
                    </td>
                    <td>
                      <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
                      <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                      <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                      <div className="dropdown" style={{ display: 'inline-block' }}>
                        <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </button>
                        
                        <ul className="dropdown-menu dropdown-min">
                          <li>
                            <Link to="#">Update</Link>
                          </li>
                          <li>
                            <Link to="#">Edit</Link>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <i className="fa fa-cubes fa-fw" aria-hidden="true"></i>
                      <Link to="/services/wp-app">&nbsp; wp-db</Link>
                    </td>
                    <td><span className="label label-success">RUNNING</span></td>
                    <td>
                      <ul className="list-child">
                        <li>
                          <i className="fa fa-cube fa-fw" aria-hidden="true"></i>
                            &nbsp; 1 Container
                          </li>
                        <li>
                          <i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i>
                          &nbsp; 1 Volumes
                        </li>
                      </ul>
                    </td>
                    <td>
                      <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
                      <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
                      <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>

                      <div className="dropdown" style={{ display: 'inline-block' }}>
                        <button type="button" className="btn btn-default btn-sm dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                        </button>
                        
                        <ul className="dropdown-menu dropdown-min">
                          <li>
                            <Link to="#">Update</Link></li>
                          <li><Link to="#">Edit</Link></li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="panel-footer">
              <Link to="/catalog" className="btn btn-success"><i className="fa fa-plus fa-fw" aria-hidden="true"></i>  Add New Service</Link>
            </div>
          </div>
        </div>
      </div>
		)
	}
}