import React 		from "react"
import { Link } from "react-router"

export default class Containers extends React.Component {
	render() {
		return (
			<div className="row">
			  <div className="col-xs-12">
			    <div className="panel">
			      <header className="panel-heading">
			        Containers
			      </header>
			      <div className="panel-body table-responsive">
			        <table className="table table-hover">
			          <thead>
			            <tr>
			              <th>Container Name</th>
			              <th>Status</th>
			              <th>Image tag</th>
			              <th>Info</th>
			              <th>Action</th>
			            </tr>
			          </thead>
			          <tbody className="table-stack-list">
			            <tr>
			              <td><i className="fa fa-cubes fa-fw" aria-hidden="true"></i><Link to="/containers/wp-app-1"> wp-app.1</Link></td>
			              <td><span className="label label-success">RUNNING</span></td>
			              <td>
			                <i className="fa fa-tag fa-fw" aria-hidden="true"></i>orcinus/wordpress-app:latest
			              </td>
			              <td>
			                <ul className="list-child">
			                  <li><i className="fa fa-hdd-o fa-fw" aria-hidden="true"></i> 1 Volumes</li>
			                </ul>
			              </td>
			              <td>
			                <Link to="#" className="btn btn-warning btn-sm list-stack-action"><i className="fa fa-pause" aria-hidden="true"></i></Link>
			                <Link to="#" className="btn btn-info btn-sm list-stack-action"><i className="fa fa-refresh" aria-hidden="true"></i></Link>
			                <Link to="#" className="btn btn-danger btn-sm list-stack-action"><i className="fa fa-trash-o" aria-hidden="true"></i></Link>
			              </td>
			            </tr>
			          </tbody>
			        </table>
			      </div>
			    </div>
			  </div>
			</div>
		)
	}
}