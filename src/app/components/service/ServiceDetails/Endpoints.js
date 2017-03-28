import React from "react"
import { Link } from "react-router"

export default class Endpoints extends React.Component {
	render() {
		return (
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
			          <tbody className="table-stack-list">
			            <tr>
			              <td>
			              	<i
		              			className="fa fa-link fa-fw"
		              			aria-hidden="true"></i>
	              			&nbsp; wp-app
              			</td>
			              <td>tcp/80</td>
			              <td>
			              	<Link to="#">
			              		http://wp-app.wordpres-app.12334.app.orcinus.io:80
			              	</Link>
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